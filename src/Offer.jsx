import React from "react";
import Offeritem from "./Offeritem";

const Offer = () => {
    return (
<>
<div class="offer-block">
                <div class="container">
                    <div class="offer-inner">
                        <div class="offer-item">
                            {/* <!-- <div class="offer-item-inner"> --> */}
                            <img src="assets/images/ad-block-1.jpg" alt="ad-block-1-image"/>
                            <div class="offer-text">
                                <span>#restock</span>
                                <p>Facewash & Shampoo</p>
                                <strong>Up To 20% Off</strong>
                                <a href="#">shop now</a>
                            </div>
                        </div>
                        <div class="offer-item">
                            <img src="assets/images/ad-block-2.jpg" alt="ad-block-2-image"/>
                            <div class="offer-text">
                                <span>#summer</span>
                                <p>Cosmetic Ever</p>
                                <strong>Discount 20% Off</strong>
                                <a href="#">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                </>
            )
}
            export default Offer;