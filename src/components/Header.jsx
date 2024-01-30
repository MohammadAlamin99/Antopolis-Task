import React, { useState } from 'react';
import images from '../assets/images/Taste now.png'
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
    const [active, setActive] = useState(0);

    const onClickHandler = (index)=>{
        setActive(index);
    }
    return (
        <div>
           <div className="MainNav">
                <div className="container">
                <div className="logo">
                    <img src={images} alt="" /> 
                </div>
                    <div className="navbar">
                        <a href="#"
                        className={active===0?"active":""}
                        onClick={()=>{onClickHandler(0)}}
                        >Home</a>
                        <a href="#"
                         className={active===1?"active":""}
                         onClick={()=>{onClickHandler(1)}}
                        >About</a>
                        <a href="#"
                         className={active===2?"active":""}
                         onClick={()=>{onClickHandler(2)}}
                        >Blog</a>
                        <a href="#"
                         className={active===3?"active":""}
                         onClick={()=>{onClickHandler(3)}}
                        >Contact us</a>
                    </div>
                    
                    <div className="icon">
                        <FiShoppingCart />
                    </div>
                        <div className="btn">
                            <button>Sign Up</button>
                        </div>
                </div>
           </div>
        </div>
    );
};

export default Header;





