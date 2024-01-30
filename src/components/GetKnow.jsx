import React from 'react';
import img from '../assets/images/getKnow.png'
import images from '../assets/images/unsplash_KdeqA3aTnBY.png'

const GetKnow = () => {
    return (
        <>
            <div className="getKnow">
                <div className="row weknock1">
                        <h2>Get to know <span>us</span></h2>
                    </div>
                <div className="container mainGet">
                    <div className="row getAll">
                        <div className="col getimg">
                            <img src={img} alt="" />
                        </div>

                        <div className="col getText">
                            <h3><span>Teamwork</span> is the key to our sucess</h3>
                            <p>At TasteNow we make sure that every decision is determined by a team of us. 
                                Everyones opinion matters, and as group,
                                 we are stronger. We firmly belive that team work, makes the dream work.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="getKnow">
                <div className="container mainGet">
                    <div className="row getAll">
                       

                        <div className="col getText">
                            <h3>We are all in for the <span>enviroment</span></h3>
                            <p>At TasteNow we make sure that every decision is determined by a team of us. 
                                Everyones opinion matters, and as group,
                                 we are stronger. We firmly belive that team work, makes the dream work.</p>
                        </div>
                        <div className="col getimg">
                            <img src={images} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GetKnow;