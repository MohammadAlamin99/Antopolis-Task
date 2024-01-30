import React from 'react';
import images from '../assets/images/Taste now(1).png'
import social from '../assets/images/Social.png'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container fotcon">
                    <div className="row mainfooter">
                        <div className="col foot">
                            <img src={images} alt="" />
                            <br />
                            <img src={social} alt="" />

                        </div>
                        <div className="col foot">
                            <ul>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                            </ul>
                        </div>
                        <div className="col foot">
                        <ul>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                            </ul>
                        </div>
                        <div className="col foot">
                        <ul>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                            </ul>
                        </div>
                        <div className="col foot">
                        <ul>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                                <li>Seslendirme ve Alt </li>
                            </ul>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;