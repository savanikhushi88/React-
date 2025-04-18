import React from "react";
const Arrivalsitem = (props) => {
    return(
        <>
           <div class="arrivals-item">
                        <div class="cmn-hide">
                            <div class="arrivals-image">
                                <img src={props.path} alt="eius-tempora-image"/>
                                <div class="arrivals">
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
export default Arrivalsitem;