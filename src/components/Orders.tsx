import React from 'react'
import Order from './Order'

function Orders({handleDuplication, orders, itemClick, deleteOrder}) {
  
  return (
    <div className="ordersWrapper" style={{paddingBottom: orders.length >= 1 ? '40px' : '0px'}}>
        {orders.length >= 1 && <span className="yourOrderSpan">Your orders:</span>}
        {orders.map((item)=>{
            return <Order handleDuplication={handleDuplication} deleteOrder={deleteOrder} itemClick={itemClick} orders={orders} item={item} key={item.id}/>
        })}
    </div>
  )
}

export default Orders