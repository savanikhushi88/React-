import React from "react";
import Featuresitem from "./Featuresitem";
const Features = () => {
    return (
        <div class="features-block">
            <div class="container">
                <div class="features-inner">
                    <div class="title">
                        <h2>Featured Collection</h2>
                    </div>
                    <div class="features-main">
                        {/* <!-- <div class="features-main-item"> --> */}
                        <Featuresitem path="assets/images/perspiciatis-unde.jpg" name1="perspiciatis undo" name2="$99.00" />
                        <Featuresitem path="assets/images/omnis-iste.jpg" name1="omnis iste" name2="$199.00" />
                        <Featuresitem path="assets/images/accusantium-dolore.jpg" name1="accusantium dolor" name2="$299.00" />
                        <Featuresitem path="assets/images/rem-aperiam.jpg" name1="rem aperiam" name2="$249.00" />
                        <Featuresitem path="assets/images/adipisci-velit.jpg" name1="adipisci velit" name2="$289.00" />
                        <Featuresitem path="assets/images/numquam-eius.jpg" name1="numquam eius" name2="$279.00" />
                        <Featuresitem path="assets/images/modi-tempora.jpg" name1="modi tempora" name2="$349.00" />
                        <Featuresitem path="assets/images/dolore-magnam.jpg" name1="dolor magnam" name2="$399.00" />
                    </div>
                    {/* <!-- </div> --> */}
                </div>
            </div>
        </div>
    )
}
export default Features;