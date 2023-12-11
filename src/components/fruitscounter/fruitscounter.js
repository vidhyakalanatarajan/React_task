import { useState } from "react";
export function Fruitscounter() {
    const [mangocounter, setMangocounter] = useState(0)
    const [bananacounter, setBananacounter] = useState(0)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Bob ate {mangocounter} mangoes {bananacounter} bananas </h1>
                    <div className="col-lg-4 mx-auto">
                    <img src="https://t3.ftcdn.net/jpg/01/80/31/64/360_F_180316446_bv4ay6SpQZwF6ivoWP7nIoCQwH7aHBTi.jpg" /><br /><br />
                    <button className="btn btn-primary border border-0 text-white" onClick={() => (setMangocounter(mangocounter + 1))}>Eat mango</button>
                </div>
                <div className="col-lg-4 mx-auto">
                    <img src="https://www.shutterstock.com/image-vector/banana-healthy-fruit-vector-illustration-260nw-1547888666.jpg" />
                    <button className="btn btn-primary border border-0 text-white" onClick={() => (setBananacounter(bananacounter + 1))}>Eat banana</button>
                </div>
                </div>
            </div>
        </>
    );
}