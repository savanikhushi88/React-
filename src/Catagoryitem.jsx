import React from "react";
const Categoryitem = (props) => {

    return (
        <>
 <div class="catagory-item">
                <div class="catagory-image">
                    <img src={props.path} alt="" />
                </div>
                <div class="catagory-text">
                    <span>{props.name}</span>
                </div>
            </div>
        </>
    )
}
export default Categoryitem;