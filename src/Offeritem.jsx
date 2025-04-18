import React from "react";
const Offeritem = (props) => {
    return (
        <>
            <div class="offer-item">
                <img src={props.path}/>
                <div class="offer-text">
                    <span>{props.name2}</span>
                    <p>Facewash & Shampoo</p>
                    <strong>Up To 20% Off</strong>
                    <a href="#">shop now</a>
                </div>
            </div>
        </>
    )
}
export default Offeritem;
