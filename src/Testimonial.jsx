import React from "react";
import Testimonialitem from "./Testimonialitem";
const Testimonial = () => {
    return (
        <div class="testimonial-block">
            <div class="container">
                <div class="testimonial-inner">
                    <div class="testimonial-title">
                        <h2>Testimonial</h2>
                    </div>
                    <div class="testimonial-main-item">
                        <Testimonialitem path="assets/images/tetimonial-img-1.jpg" name1="john-deo" />
                        <Testimonialitem path="assets/images/tetimonial-img-2.jpg" name1="mark-deo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;