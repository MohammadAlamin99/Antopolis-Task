
import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import images from '../assets/images/pizza 2 1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiPizzaLight } from "react-icons/pi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { CiBurger } from "react-icons/ci";
import { LuSalad } from "react-icons/lu";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <div>
      <div className="mainCategory">
        <h1>
          Our Popular <span>Categories</span>
        </h1>
      </div>
      <div className="categoryNav">
        <ul>
          <li className={activeCategory === 0 ? 'active' : ''}>
            <a onClick={() => handleCategoryClick(0)}>
            
                <PiPizzaLight className='pizza'/>
                Pizzas
            </a>
          </li>
          <li className={activeCategory === 1 ? 'active' : ''}>
            <a onClick={() => handleCategoryClick(1)}>
            <LiaHamburgerSolid className='pizza'/>
            Burgers
            </a>
          </li>
          <li className={activeCategory === 2 ? 'active' : ''}>
            <a onClick={() => handleCategoryClick(2)}>
            <LuSalad className='pizza'/>
            Salads
            </a>
          </li>
          <li className={activeCategory === 3 ? 'active' : ''}>
            <a onClick={() => handleCategoryClick(3)}>
            <CiBurger className='pizza'/>
            Combos
            </a>
          </li>
        </ul>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        initialSlide={activeCategory}
      >
       <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart </button>
         </SwiperSlide>
         <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart</button>
         </SwiperSlide>
         <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart</button>
         </SwiperSlide>
         <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart</button>
         </SwiperSlide>
         <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart</button>
         </SwiperSlide>

         <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart</button>
         </SwiperSlide>

         <SwiperSlide className='pizzaSlide'>
           <img src={images} alt="" />
           <h3>Pepperoni Pizza</h3>
           <span>Di napoles</span>
           <p>11$</p>
           <button>Add to Cart</button>
         </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Category;
