import React from 'react'
import '../index.css'
import Orders from './Orders'
import EmptyCart from './EmptyCart'

function Cart({handleDuplication, order, showCart, setShowCart, moveCart, setMoveCart, itemClick, setTotalPrice, totalPrice, deleteOrder}) {
  let totalCounter = 0;
  setTotalPrice(()=>{
    order.map((item:any)=>{return totalCounter+= parseInt(item.price)});
    return totalCounter
  })
  return (
    <div className='cartDiv' style={{transform: moveCart ? 'translateX(0)' : 'translateX(120%)' }}>
      <Orders handleDuplication={handleDuplication} deleteOrder={deleteOrder} itemClick={itemClick} orders={order}/>
      {order.length < 1 && <EmptyCart/>}
      <div className='cartFooter'>
        {order.length >= 1 && <span onClick={()=>{setTimeout(()=>{setShowCart(!showCart)},300); setMoveCart(!moveCart)}} className="exitBtnCart">+</span>}
        {order.length >= 1 && <span className="total">Total: {totalPrice}$</span>}
      </div>
      
      
    </div>
  )
}

export default Cart