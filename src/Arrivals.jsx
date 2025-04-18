import React from "react";
import Arrivalsitem from "./Arrivalsitem";
const Arrivals =() =>{
    return(
        <div class="arrivals-block">
        <div class="container">
            <div class="arrivals-inner">
                <div class="title">
                    <h2>new arrivals</h2>
                </div>
                <div class="arrivals-main-item">
                    <Arrivalsitem path="assets/images/eius-tempora.jpg" name1 = "eius tempora" name2 ="$379.00"/>
                    <Arrivalsitem path="assets/images/porro-quisquam.jpg" name1 = "porro quisquam" name2 ="$319.00"/>
                    <Arrivalsitem path="assets/images/architecto-beatae.jpg" name1 = "architecto beatae" name2 ="$359.00"/>
                    <Arrivalsitem path="assets/images/reprehenderit-beatae.jpg" name1 = "reprehenderit beatae" name2 ="$349.00"/>
                    </div>
                </div>  
            </div>
        </div>
    )
}
export default Arrivals;