import React from "react";
export const Services = () => {

    return(
    <>
        <div className="services-block">
        <div className="container">
            <div className="services-inner">
                <div className="services-item">
                    <div className="services-item-inner">
                        <div className="services-image">
                            <img src="assets/images/Secure-Payment.png" alt="Secure-Payment-image"/>
                        </div>
                        <div className="services-text">
                            <strong> Secure Payment </strong>
                            <p>Secure Payment with PEV</p>
                        </div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item-inner">
                        <div className="services-image">
                            <img src="assets/images/Refund-Policy.png" alt="Refund-Policy-image"/>
                        </div>
                        <div className="services-text">
                            <strong> Refund Policy </strong>
                            <p>Refund within 30 days</p>
                        </div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item-inner">
                        <div className="services-image">
                            <img src="assets/images/Online-Support.png" alt="Online-Support-image"/>
                        </div>
                        <div className="services-text">
                            <strong> Online Support </strong>
                            <p>24 hours a day</p>
                        </div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item-inner">
                        <div className="services-image">
                            <img src="assets/images/Free-Shipping.png" alt="Free-Shipping-image"/>
                        </div>
                        <div className="services-text">
                            <strong> Free Shipping </strong>
                            <p>On all us orders above $100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}