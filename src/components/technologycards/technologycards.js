import React from "react";
import '../technologycards/technologycards.css'
 export function Technologycards(){
    return(
        <>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col" >
    <div className="card border-5 border border-danger" >
     
    <div className="card-body card1 " >
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Data Scientist gather and analyze large sets of structured and unstructed Data.</p>
        <img src="https://static.vecteezy.com/system/resources/previews/021/515/008/original/data-scientist-job-flat-concept-spot-illustration-editable-2d-cartoon-character-on-white-for-web-design-evaluating-performance-business-analyst-creative-idea-for-website-mobile-app-vector.jpg" className="col-2 float-end " alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-5 border-top border-info">
     
      <div class="card-body  border border-3">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">IoT Developer are proessionals who can develop,manage and model IoT devices.</p>
        <img src="https://c8.alamy.com/comp/2M81Y9T/machine-learning-isolated-cartoon-vector-illustrations-2M81Y9T.jpg" className="col-2 float-end" alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-5 border border-success">
      
      <div class="card-body  border border-3">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">A vit developer create completely new digital enviroment that people can't see</p>
        <img src="https://5.imimg.com/data5/NK/EA/VH/SELLER-995203/vr-game-development-solutions.png" className="float-end col-2" alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-5 border border-warning">
      
      <div class="card-body  border border-3">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">Machine learning engineers find data into mobiles deined by data scientists.</p>
        <img src="https://cdn.sanity.io/images/oaglaatp/production/2d215fdc3d854217b402e9816af925ebde110ebb-1200x800.png?w=1200&h=800&auto=format" class="float-end col-2" alt="..."/>
      </div>
    </div>
  </div>
</div>
        </>
    );
}