import React from 'react'
import {FaTrash} from "react-icons/fa6";

function Order({handleDuplication, item, orders, itemClick, deleteOrder}) {
  
  return (
    <div className="orderWrapper">
      <FaTrash onClick={()=>{deleteOrder(item.id)}} className="trashIcon"/>
      <div className='orderItem' onClick={()=>itemClick(item)}>
        <div className='orderItemImgDiv'>
            <img src={'../../public/images/'+ item.img}/>   
        </div>
        <div className="orderItemTitleDiv">
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <b>{item.price}$</b>
            
            
        </div>
    </div>
    </div>
    
  )
}

export default Order