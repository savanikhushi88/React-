import React from "react";
import Herosection from "./Hero-section";
import {Services} from "./Services";
import Category from "./Category";
import Offer from "./Offer";
import Features from "./Features";
import Advertise from "./Advertise";
import Arrivals from "./Arrivals";
import Testimonial from "./Testimonial";
import Brands from "./Brands";

 const Mainbody = () => {
    return (
        <>
        <Herosection/>
        <Services/>
        <Category/>
        <Offer/>
        <Features/>
        <Advertise/>
        <Arrivals/>
        <Testimonial/>
        <Brands/>
        </>
    )
}
export default Mainbody;