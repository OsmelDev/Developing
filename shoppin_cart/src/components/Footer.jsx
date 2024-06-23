import React from 'react'
import style from './styles/footer.module.css'
import { TfiWorld } from "react-icons/tfi";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className={style.footer}>
     <div className={style.infoContainer}>
       <div className={style.options}>
          <h2>Get to Know Us</h2>
         <ul>
           <li>Careers</li>
           <li>Blog</li>
           <li>About Amazon</li>
           <li>Investor Relations</li>
           <li>Amazon Devices</li>
           <li>Amazon Science</li>
         </ul></div>

       <div className={style.options}>
         <h2>Make Money with Us</h2>
         <ul>
           <li>Sell products on Amazon</li>
           <li>Sell on Amazon Business</li>
           <li> Sell apps on Amazon</li>
           <li>Become an Affiliate</li>
           <li> Advertise Your Products</li>
           <li>Self-Publish with Us</li>
           <li>Host an Amazon Hub</li>
           <li>› See More Make Money with Us</li>
         </ul></div>

       <div className={style.options}>
        <h2>Amazon Payment Products</h2>
         <ul>
           <li>Amazon Business Card</li>
           <li>Shop with Points</li>
           <li> Reload Your Balance</li>
           <li>Amazon Currency Converter</li>
        </ul></div>

       <div className={style.options}>
         <h2>Let Us Help Yous</h2>
         <ul>
           <li>Amazon and COVID-19</li>
           <li>Your Account</li>
           <li>Shipping Rates & Policies</li>
           <li>Returns & Replacements</li>
           <li>Manage Your Content and Devices</li>
           <li>Help</li>
         </ul></div>
     </div>

     <div className={style.addInfoContainer}>
       <div className={style.optionContainer}>
         <img src="" alt=""/>
         <button><TfiWorld/> English </button>
         <button>$ USD - U.S. Dollar</button>
         <button> <LiaFlagUsaSolid/> United States</button>
       </div>
     </div>
    </div>
  )
}

export default Footer