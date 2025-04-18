import React from "react";
import Categoryitem from "./Catagoryitem";
const Category = () => {
    return (  
        <>
            <div class="catagory-block">
                <div class="container">
                    <div class="catagory-inner">
                        <div class="title">
                            <h2>dive in</h2>
                        </div>
                        <div class="catagory">
                            <Categoryitem name="sale" path="assets/images/6_thumb.jpg" />
                            <Categoryitem name="shop" path="assets/images/27_thumb.jpg" />
                            <Categoryitem name="fashion" path="assets/images/37_thumb.jpg" />
                            <Categoryitem name="sport" path="assets/images/28_thumb.jpg" />
                            <Categoryitem name="mobile" path="assets/images/7_thumb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;