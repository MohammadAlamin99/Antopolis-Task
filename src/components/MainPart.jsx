import React from 'react';
import images from '../assets/images/Food Background .png'
const MainPart = () => {
    return (
        <div>
            <div className="MainPart">
                <div className="container">
                    <div className="row main">
                        <div className="col mainpartCol">
                            <h1>Experience food <br /> <span>Delivery</span> like no other</h1>
                            <p>We deliver the food of your choice wherever, whenever. Select your food from only
                                the top restaurants in the area, and get it in a flash. 
                                Download the app now to discover more.
                            </p>
                        </div>
                        <div className="col mainpartImg">
                                <img src={images} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPart;