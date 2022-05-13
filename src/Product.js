import React, { useEffect, useState } from "react";

export default function App(props) {
    const [main, setMain] = useState(props.item.thumbs[0])
    const [count, setCount] = useState(0)

    const thumbnails = props.item.thumbs.map((imgList, index) => <img className={`thumbImg${main === imgList ? "-active" : ""}`}
        src={imgList} alt="product" onClick={() => newMainImg(index)}/>)

    function newMainImg(ind){
        setMain(props.item.thumbs[ind])
    }

    function addCart(order){
        order === "add"? setCount(prevCount => prevCount + 1) : 
            count && setCount(prevCount => prevCount - 1)
    }

    function move(direction){
        const currImg = props.item.thumbs.indexOf(main)

        direction === "left" ?
            currImg === 0 ? setMain(props.item.thumbs[props.item.thumbs.length-1]) : setMain(props.item.thumbs[currImg-1]) :
        currImg === 3 ? setMain(props.item.thumbs[0]) : setMain(props.item.thumbs[currImg+1])
    }

    useEffect(() =>{
        setCount(0)
    }, [props.handleClick])

  return (
    <div className="productContainer">
        <div className="imgContainer">
            <div className="mainImg-holder">
                <div className="left-arrow" onClick={() => move("left")}></div>
                <img className="mainImg" src={main} alt="product"/>
                <div className="right-arrow" onClick={() => move("right")}></div>
            </div>
            <div className="thumbs-holder">
                {thumbnails}
            </div>
        </div>
        <div className="detailsContainer">
            <div className="productDetails">
                <h3>{props.item.manu}</h3>
                <h1>{props.item.name}</h1>
                <p>{props.item.desc}</p>
                <div className="detail-priceContainer">
                    <h2>${props.item.price.toFixed(2)}</h2>
                    <div className="discount-holder"><h3>{props.item.disc}%</h3></div>
                    <h4><s>${props.item.op.toFixed(2)}</s></h4>
                </div>
                <div className="detail-addCart">
                    <div className="detail-quantity">
                        <div className="quantity-minus" onClick={() => addCart("less")}></div>
                        <div className="quantity-count">{count}</div>
                        <div className="quantity-add" onClick={() => addCart("add")}></div>
                    </div>
                    <button className="addCartBtn" onClick={() => props.handleClick(count)}><div className="icon-cart">&#128722;</div>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

