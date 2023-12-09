import React from 'react'
import Item from './Item'
import FullItem from './FullItem'

function Items({items, addToOrder, itemClick, fullItem}) {
  return (
    <div className="itemsDiv">
        {items.map((item)=>{
             return  <Item itemClick={itemClick} addToOrder={addToOrder} key={item.id} item={item}/>
             
        })}
    </div>
  )
}

export default Items