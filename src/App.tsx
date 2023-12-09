import React from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import EmptyHint from './components/EmptyHint'
import './index.css'
import Items from './components/Items'
import FullItem from './components/FullItem'

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [moveCart, setMoveCart] = React.useState(false);
  const [fullItem, setFullItem] = React.useState(false);
  let [dubleCounter, setDubleCounter] = React.useState(0)
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState();
  const [products, setProducts] = React.useState({
    items:[
      {
        id: 1,
        title: 'Sneekers',
        category:'Shoes',
        price:'34.55',
        img: 'sneekers.png',
        desc:'Vionic Womens Walker Classic Comfortable Leisure Shoes- Supportive Walking Sneakers That Include Three-Zone Comfort with Orthotic Insole Arch Support'
      },
      {
        id: 2,
        title: 'Nike',
        category:'Shoes',
        price:'85.99',
        img: 'nike.png',
        desc:'VINTAGE STYLE. The Nike Blazer Mid 77 Vintage combines old-school basketball style with the vintage finish of the midsole, while innovative details update the look. Reinforced structure that blends the midsole to the sole for an essential look. Foam exposed on the tongue for a vintage style.'
      },
      {
        id: 3,
        title: 'Puma',
        category:'Shoes',
        price:'70.55',
        img: 'puma.png',
        desc:'From sportswear to streetwear, PUMA gives young trendsetters what they need to look their best and express themselves to the fullest. Whether you’re filling their first closet or finally letting them build their own outfits, PUMA has looks for every step of the way and every part of the day.'
      },
      {
        id: 4,
        title: 'New Balance',
        category:'Shoes',
        price:'60.75',
        img: 'new_balance.png',
        desc:'More accommodating than the narrow racing silhouette, and more visually versatile than its visible tech-laden peers, the 574 s formula of unassuming style and comfort have made the hybrid road/trail design a genuine all-time classic.'
      },
      {
        id: 5,
        title: 'Ryka Woman',
        category:'Shoes',
        price:'85.30',
        img: 'ryka_woman.png',
        desc:'Get the comfort and performance you need every time you exercise in this light and comfortable walking sneaker, an update to a top-rated favorite with exceptional cushion, shock absorption, and our powerful Made for Women fit. BEST FOR: High-performance fitness walking.'
      },
      {
        id: 6,
        title: 'Adidas',
        category:'Shoes',
        price:'34.55',
        img: 'adidas.png',
        desc:'Adidas Supernova Cushion Running Shoe is one of the most-beloved cushioning shoes on the road today. Designed to take you far and fast, this latest generation shoe offers greater comfort and breathability with even less weight.'
      },
      {
        id: 7,
        title: 'Sneekers',
        category:'Shoes',
        price:'34.55',
        img: 'sneekers.png',
        desc:'Vionic Womens Walker Classic Comfortable Leisure Shoes- Supportive Walking Sneakers That Include Three-Zone Comfort with Orthotic Insole Arch Support'
      },
      {
        id: 8,
        title: 'Sneekers',
        category:'Shoes',
        price:'34.55',
        img: 'sneekers.png',
        desc:'Vionic Womens Walker Classic Comfortable Leisure Shoes- Supportive Walking Sneakers That Include Three-Zone Comfort with Orthotic Insole Arch Support'
      },
      {
        id: 9,
        title: 'Sneekers',
        category:'Shoes',
        price:'34.55',
        img: 'sneekers.png',
        desc:'Vionic Womens Walker Classic Comfortable Leisure Shoes- Supportive Walking Sneakers That Include Three-Zone Comfort with Orthotic Insole Arch Support'
      },
    ],
    orders:[],
    currentItems:[],
  })
  React.useEffect(()=>{
    setTimeout(()=>{showCart === true && products.orders.length < 1 ? setShowCart(!showCart) : 'none'},4000);
  },[showCart])
  React.useEffect(()=>{
    setTimeout(()=>{moveCart === true && products.orders.length < 1 ? setMoveCart(!moveCart) : 'none'},3500);
  },[moveCart])
  return (
    <div className="wrapperDiv">
      {fullItem && <FullItem itemClick={itemClick} addToOrder={addToOrder} item={currentItem}/>}
      <Header /**/orders={products.orders}/**/ moveCart={moveCart} setMoveCart={setMoveCart} items={products.items} showCart={showCart}
        setShowCart={setShowCart}/>
      {showCart && <Cart handleDuplication={handleDuplication} deleteOrder={deleteOrder} setTotalPrice={setTotalPrice}
       totalPrice={totalPrice} setMoveCart={setMoveCart}
        setShowCart={setShowCart} itemClick={itemClick} moveCart={moveCart}
          showCart={showCart} order={products.orders}/>}
      <Items fullItem={fullItem} itemClick={itemClick} addToOrder={addToOrder} items={products.items}/>
      

    </div>
  )
  setProducts({
    items: products.items,
    orders: products.orders,
    currentItems: products.orders,
  })
  function addToOrder(item:any){
    if(!products.orders.includes(item)){
      setProducts({
        items: products.items,
        orders: [...products.orders, item]
      })
    }else{
      handleDuplication(item)
    }
    
    setTimeout(()=>{setShowCart(true)},0);setTimeout(()=>{setMoveCart(true)},100);
  }
  function itemClick(item:any){
    setFullItem(!fullItem)
    console.log(fullItem);
    setCurrentItem(item);
    setShowCart(true);
    setMoveCart(true)
  }
  function deleteOrder(id){
    setProducts({
      items: products.items,
      orders: products.orders.filter(order => order.id !== id),
      currentItems: products.orders
    })
  }
  function handleDuplication(item){// get rid of state setState
    products.orders.map((order)=>{order === item && setDubleCounter(dubleCounter+=1)})
    console.log(dubleCounter)
  }

}

export default App