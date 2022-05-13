import React, { useState } from "react";
import Product from "./Product"
import logo from "./images/logo.svg"
import cart from "./images/icon-cart.svg"
import avatar from "./images/image-avatar.png"
import img1 from "./images/image-product-1.jpg"
import img2 from "./images/image-product-2.jpg"
import img3 from "./images/image-product-3.jpg"
import img4 from "./images/image-product-4.jpg"

function App() {
  const [menu, setMenu] = useState(false)
  const [openCart, setOpencart] = useState(false)
  const [oncart, setOncart] = useState([])
  const product = {
    manu: "Sneaker Company",
    name: "Fall Limited Edition Sneakers", 
    price: 125,
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    disc: 50,
    op: 250,
    thumbs: [img1, img2, img3, img4]
  }

  function toggleMenu(){
    setMenu(!menu)
  }

  function toggleCart(){
    setOpencart(!openCart)
  }

  function addedToCart(count){
    count && setOncart(prevState => ({...prevState, img: product.thumbs[0], 
      name: product.name, price: product.price, quant: count}))
  }

  function emptyCart(){
    setOncart([])
  }

  const cartItems = oncart.length === 0? 
    <h3>Your cart is empty.</h3> :
    <div>
      <div className="cartItems">
      <div>
        <img className="cartImg" src={oncart.img} alt="product"/>
      </div>
      <div className="cartproduct">
        <p>{oncart.name}</p>
        <p>${oncart.price.toFixed(2)} x {oncart.quant} <strong>${(oncart.price * oncart.quant).toFixed(2)}</strong></p>
      </div>
      <div className="cartdelete" onClick={emptyCart}></div>
      </div> 
      <button className="checkoutBtn">Checkout</button>
    </div>

  return (
    <div>
      <header>
        <div className={`toggle-nav${menu? "-active" : ""}`} onClick={toggleMenu}/>
        <img className="logo" src={logo} alt="logo"/>
        <nav className={`nav${menu? "-active" : ""}`}>
          <ul className={`navbar navbar-toggle${menu? "-active" : ""}`}>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </nav>
        <img className="cart" src={cart} alt="cart" onClick={toggleCart}/>
        <img className="avatar" src={avatar} alt="avatar"/>
        <div className={`basket${openCart? "-active" : ""}`}>
          <h2>Cart</h2>
          <hr></hr>
          <div className="cartContent">{cartItems}</div>
        </div>
      </header>
      <Product item={product} handleClick={addedToCart}/>
    </div>
  )
}

export default App;
