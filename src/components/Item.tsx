import React from 'react'
import '../index.css'
import img from '../../public/images/sneekers.png'

function Item({item, addToOrder, itemClick}) {
  return (
    <div className="itemWrapperDiv">
        <span className="addToCartBtn" onClick={()=>{addToOrder(item)}}>+</span>
      <div className="itemDiv" onClick={()=>itemClick(item)}>
          <h1>{item.title}</h1>
          <h2>{item.category}</h2>
          <img src={'../../public/images/'+ item.img}/>
          <p>{item.desc}</p>
          <b>{item.price}$</b>
          
          
          
          
          
      </div>
    </div>

  )
}

export default Item