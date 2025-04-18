import React from "react";
import Brandsitem from "./Brandsitem";
const Brands = () => {
    return (
        <div class="brands-block">
            <div class="container">
                <div class="brands-inner">
                    <div class="title">
                        <h2>top brands</h2>
                    </div>
                    <div class="brands-main">
                        <Brandsitem path="assets/images/4.png" />
                        <Brandsitem path="assets/images/5.png" />
                        <Brandsitem path="assets/images/6.png" />
                        <Brandsitem path="assets/images/7.png" />
                        <Brandsitem path="assets/images/8.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Brands;