import React from "react";
const ContactUs = () => {
    return (
        <>
            <div class="contact">
                <div class="container">
                    <div class="contact-inner">
                        <div class="contact-left">
                            <div>
                                <h2>STORE INFORMATION</h2>
                                <div class="contact-icon">
                                    <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                                    <div class="data">
                                        <p>
                                            Etrend Cosmetics <br />
                                            185 Street, Arizona <br />
                                            85002 <br />
                                            United States</p>
                                    </div>
                                </div>
                                <div class="contact-icon">
                                    <div class="icon"><i class="fa-solid fa-phone"></i></div>
                                    <div class="data">
                                        <p>Call us: <br />
                                            <span>(123)456 7890</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-icon line">
                                    <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                                    <div class="data">
                                        <p>
                                            Email us: <br />
                                        </p>
                                        <a href="mailto:info@domain.com">info@domain.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-right">
                            <div>

                                <div class="contact-form">
                                    <h2>contact us</h2>
                                </div>

                                <div class="content">
                                    <div class="contact-form">
                                        <label for="subject" class="select-title">Subject</label>
                                        <select name="subject" class="select">
                                            <option>customer service</option>
                                            <option>webmaster</option>
                                        </select>
                                    </div>
                                    <div class="contact-form">
                                        <label for="email" class="label1">Email address</label>
                                        <input type="email" name="email" placeholder="your@email.com" />
                                    </div>
                                    <div class="contact-form">
                                        <label for="attachment" class="label2">Attachment</label>
                                        <div class="attatchment">
                                            <input type="text" placeholder="" />
                                            <button>CHOOSE FILE</button>
                                        </div>

                                    </div>
                                    <div class="contact-form">
                                        <label for="message" class="message">Message</label>
                                        <textarea name="msg" placeholder="how can we help?"></textarea>
                                    </div>

                                    <div class="btn">
                                        <button>SEND</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ContactUs;