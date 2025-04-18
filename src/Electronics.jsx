import React from "react";
const Electronics = () => {
    return (
        <>
                  <div class="fashion-block">
                <div class="container">
                    <div class="fashion-inner">
                        {/* <ul>
                    <li>Home</li>/
                    <li>Shop</li>/
                    <li>Fashion</li>
                </ul>  */}
                        <div class="fashion-menu">
                            <ul class="fashion-topmenu">
                                <li>ELECTRONICS</li>
                                <ul class="fashion-submenu">
                                    <li>Mobiles<i class="fa-solid fa-plus"></i></li>
                                    <li>Cameras<i class="fa-solid fa-plus"></i></li>
                                    {/* <li>kids <i class="fa-solid fa-plus"></i></li>
                                    <li>accessories <i class="fa-solid fa-plus"></i></li> */}
                                </ul>
                            </ul>
                            <ul class="fashion-filter-title">
                                <li>filter by</li>
                                <ul class="fashion-filter">
                                    <li>categories<i class="fa-solid fa-angle-down"></i></li>
                                    <li>brand<i class="fa-solid fa-angle-down"></i></li>
                                    <li>price<i class="fa-solid fa-angle-down"></i></li>
                                </ul>
                            </ul>
                            <div class="fashion-image-main">
                                <div class="fashion-image">
                                    <img src="assets/images/advertising.jpg" alt="advertisinge" />
                                </div>
                            </div>
                        </div>
                        <div class="fashion-content">
                            <div class="fashion-top">
                                <div class="fashion-top-image">
                                    <img src="assets/images/shop.jpg" alt="fashion-image" />
                                </div>
                                <div class="fashion-desc">
                                    <h2>Electronics</h2>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div class="fashion-middle">
                                <div class="fashion-middle-left">
                                    <div class="fashion-left-icon">
                                        <div class="fashion-icon1">
                                            <i class="fa-solid fa-table-cells-large"></i>
                                        </div>
                                        <div class="fashion-icon2">
                                            <i class="fa-solid fa-table-list"></i>
                                        </div>
                                    </div>
                                    <div class="fashion-left-text">
                                        <p>There are 16 products.</p>
                                    </div>
                                </div>
                                <div class="fashion-middle-right">
                                    <label for="sort by">Sort by:</label>
                                    <select name="sort by">
                                        <option>best seller</option>
                                        <option>relevance</option>
                                        <option>name,a to z</option>
                                        <option>name,z to a</option>
                                        <option>price,low to high</option>
                                        <option>price,high to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="fashion-bottom">
                                <div class="dishes-main">
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/perspiciatis-unde.jpg" alt="perspiciatis-unde" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">perspiciatis unde</a>
                                                <span>$99.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/omnis-iste.jpg" alt="omnis-iste" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">omnis iste</a>
                                                <span>$199.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/accusantium-dolore.jpg" alt="accusantium-dolore" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">accusantium dolore</a>
                                                <span>$299.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/rem-aperiam.jpg" alt="rem-aperiam.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">rem aperiam</a>
                                                <span>$249.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/adipisci-velit.jpg" alt="adipisci-velit.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">adipisci velit</a>
                                                <span>$289.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/numquam-eius.jpg" alt="numquam-eius.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">numquam eius</a>
                                                <span>$279.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/modi-tempora.jpg" alt="modi-tempora.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">modi tempora</a>
                                                <span>$349.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/dolore-magnam.jpg" alt="dolore-magnam.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">dolore magnam</a>
                                                <span>$399.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/voluptas-nulla.jpg" alt="voluptas-nulla.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">voluptas nulla</a>
                                                <span>$389.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/iure-reprehenderit.jpg" alt="iure-reprehenderit.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">iure-reprehenderit.jpg</a>
                                                <span>$379.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/porro-quisquam.jpg" alt="porro-quisquam.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">porro-quisquam.jpg</a>
                                                <span>$319.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dishes-item">
                                        <div class="dishes-item-inner">
                                            <div class="cmn-hide">
                                                <div class="dishes-image">
                                                    <img src="assets/images/architecto-beatae.jpg" alt="architecto-beatae.jpg" />
                                                    <ul>
                                                        <li class="dishes-new">new</li>
                                                        <li class="dishes-sale">on sale!</li>
                                                    </ul>
                                                    <div class="quick-view">
                                                        <a href="#">quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dishes-text">
                                                <a href="#">architecto-beatae.jpg</a>
                                                <span>$359.00</span>
                                                <div class="cmn-btn">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
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
export default Electronics;