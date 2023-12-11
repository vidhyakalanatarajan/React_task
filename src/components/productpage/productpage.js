import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Productpage(){
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=5")
        .then(productdetails=>productdetails.json())
        .then(data=>setProduct(data))
    }
    )
    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>S.no</td>
                    <td>productImage</td>
                    <td>Titel</td>
                    <td>Description</td>
                    <td>Rating</td>
                    <td>Actions</td>
                </tr>
            </thead>
        {
        product.map((value,index)=>
        (
            <>
            <tbody>
                <tr>
                    <td>{value.id}</td>
                    <td>{value.image}</td>
                    <td>{value.title}</td>
                    <td>{value.description}</td>
                    <td><StarRatings
                            rating={value.rating.rate}
                            starRatedColor="gold"
                            numberOfStars={5}
                            starDimension="15px"
                            starSpacing="1px"
                        /></td>
                    <Link to={`/details/${value.id}`} className="btn btn-primary"><td>view</td></Link>
                </tr>
            </tbody>
            </>
        ))
        }
        </table>
        </>
        );
    }