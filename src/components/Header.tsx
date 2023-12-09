import React from 'react'
import '../index.css'
import {FaCartShopping} from "react-icons/fa6";

function Header({/**/orders/**/,showCart, setShowCart, items, moveCart, setMoveCart}:any) {
  function handleCartClick(){
    if(showCart === true){
        setTimeout(()=>{
          setShowCart(!showCart)
        },300)
      
    }
    if(showCart === false){
      setShowCart(!showCart);
    }
      
    setTimeout(()=>{
      setMoveCart(!moveCart)
    },100)
  }
  return (
    <header>
        <div>
            
            <ul>
                <span className="companyName">ClothsDistrict&#174;</span>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Products</li>
                <FaCartShopping style={{transform: showCart && 'rotate(30deg)'}} onClick={handleCartClick} className="cartImg"/>
            </ul>
        </div>
    </header>
    
  )
}

export default Header