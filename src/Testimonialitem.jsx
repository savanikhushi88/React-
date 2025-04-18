import React from "react";
const Testimonialitem = (props) => {
    return (
        <>
            <div class="testimonial-item">
                <div class="testimonial-inner-item">
                    <div class="image">
                        <div class="testimonial-images">
                            <img src={props.path}
                                alt="Testimonial-bg-image" />
                        </div>
                        <div class="testimonial-text">
                            <p>Pellentesque habitant morbi tristique senectus et netus et male suada
                                fame ac
                                turpis egestas. Morbi scelerisque lorem lacusmus non.</p>
                            <strong>{props.name1}  <span>customer</span></strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonialitem;