import React from "react";
const Featuresitem = (props) => {
    return(
        <>
           <div class="features-item">
                                <div class="features-image">
                                    <div class="cmn-hide">
                                        <img src={props.path} alt=""/>
                                        <div class="features">
                                            <ul>
                                                <li class="new">new</li>
                                                <li class="sale">on sale!</li>
                                            </ul>
                                        </div>
                                        <div class="quick-view">
                                            <a href="#">quick view</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="cmn-text">
                                    <div class="cmn-btn">
                                        <a href="#">{props.name1}</a>
                                    </div>
                                    <span>{props.name2}</span>
                                    <a href="#">add to cart</a>
                                </div>
                            </div>
        </>
    )
}
export default Featuresitem;