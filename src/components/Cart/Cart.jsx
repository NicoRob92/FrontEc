import s from "./Cart.module.scss"
import {useState, useRef, useEffect} from "react"
import CartItem from "./CartItem"
import Fade from 'react-reveal/Fade';

export default function Cart ({showCart, setShowCart}){
    
    const [items, setItems] = useState ([
        {product:"Casa grande", key:0, amount:1},
        {product:"Perro", key:1, amount:1}])
    const cart = useRef(null)

    useEffect(()=>{
        if(!showCart){
            return cart.current.classList.add(`${s.closed}`)
        }
        return cart.current.classList.remove(`${s.closed}`)
    })

    return<div className={s.cartContainer}>
    
    <section className ={s.cart} ref={cart}>
        <button onClick={()=>setShowCart(false)} className={s.close}>x</button>
        <div className={s.title}>
           <h3>Your cart</h3> 
        </div>
        
            <div className= {s.cartList}>

                {items.map(item=><CartItem 
                product={item.product} 
                key={item.key} 
                id ={item.key}
                amount={item.amount}

                />)}
                <button>Checkout</button>
            </div>

        </section>
    </div>

}