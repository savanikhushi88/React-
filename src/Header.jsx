import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div class="main-header">
            <div class="header-top">
                <div class="container">
                    <div class="header-top-inner">
                        <div class="h-menu">
                            <i class="fa-sharp fa-solid fa-bars"></i>
                        </div>
                        <div class="header-top-left">
                            <img src="assets/images/etrend-cosmetics-logo-1624077265.png" alt=""/>
                        </div>
                        <div class="header-top-middle">
                            <div class="header-top-text">
                                <input type="text" name-="text" placeholder="Search Products" />
                                <div class="header-top-icon">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div class="header-top-right">
                            <i class="fa-solid fa-user"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- start header bottem  --> */}
            <div class="header-bottem">
                <div class="container">
                    <ul class="main-menu">
                       <Link to = "/">home</Link>
                        <li>
                            {/* <a href="#">shop <i class="fa-solid fa-angle-down"></i></a> */}
                            <Link to = "/shop">shop <i class="fa-solid fa-angle-down"></i></Link>
                            <ul class="sub-menu">
                                <li><a href="#">Fashion<i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="menu">
                                        <li><a href="#">men</a></li>
                                        <li><a href="#">women</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">accessories</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Jewellery<i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="menu">
                                        <li><a href="#">rings</a></li>
                                        <li><a href="#">bracelets</a></li>
                                        <li><a href="#">nacklaces</a></li>
                                        <li><a href="#">wedding bands</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Furniture<i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="menu">
                                        <li><a href="#">Living Room</a></li>
                                        <li><a href="#">Kitchen</a></li>
                                        <li><a href="#">Office</a></li>
                                        <li><a href="#">Home Doctor</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Autoparts<i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="menu">
                                        <li><a href="#">engine parts</a></li>
                                        <li><a href="#">exhauxt parts</a></li>
                                        <li><a href="#">brake parts</a></li>
                                        <li><a href="#">body parts</a></li>
                                    </ul>
                                </li>
                            </ul>
                       
                    </li>
                    <li>
                        <div class="menu">
                            {/* <a href="#">furniture <i class="fa-solid fa-angle-down"></i></a> */}
                            <Link to = "/furniture">furniture<i class="fa-solid fa-angle-down"></i></Link>
                            <ul class="sub-menu">
                                <li><a href="#">Living Room</a></li>
                                <li><a href="#">Kitchen</a></li>
                                <li><a href="#">Office</a></li>
                                <li><a href="#">Home Doctor</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="menu">
                            {/* <a href="#">electronics<i class="fa-solid fa-angle-down"></i></a> */}
                            <Link to = "/electronics">electronics<i class="fa-solid fa-angle-down"></i></Link>
                            <ul class="sub-menu">

                                <li><a href="#">Mobiles<i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="menu">
                                        <li><a href="#">apple</a></li>
                                        <li><a href="#">blackBerry</a></li>
                                        <li><a href="#">oneplus</a></li>
                                        <li><a href="#">sony</a></li>
                                    </ul>
                                </li>

                                <li><a href="#">Cameras<i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="menu">
                                        <li><a href="#">DSLR</a></li>
                                        <li><a href="#">lences</a></li>
                                        <li><a href="#">tripods</a></li>
                                        <li><a href="#">battries</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {/* <li><a href="#">sale</a></li> */}
                    <Link to = "/sale">sale</Link>
                    {/* <li><a href="#">contact us</a></li> */}
                    <Link to = "contact us">contact us</Link>
                </ul>
            </div>
        </div>
        </div>

    )
}
export default Header;