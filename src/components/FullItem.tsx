import React from 'react'
import '../index.css'

function FullItem({item, itemClick, addToOrder}) {
  return (
    <div className="fullItemWrapper">
        <div className="fullItem" onClick={()=>itemClick(item)}>
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <img src={'../../public/images/'+ item.img}/>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <span className="exitBtn" onClick={()=>itemClick(item)}>+</span>
            <span onClick={()=>{addToOrder(item)}} className="addBtn">+</span>
        </div>
       
    </div>
  )
}

export default FullItem