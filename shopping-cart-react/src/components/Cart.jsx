import React from "react";
import CartItem from "./CartItem";
import objetoItem from "../item"

class Cart extends React.Component {
    render() {
        return(
            <section className="cart">
                <ol className="cart__items">
                    <CartItem item={objetoItem}/>
                </ol>
                <span id="price"></span>
                <button className="empty-cart">Esvaziar carrinho</button>
            </section>
        )
    }
}

export default Cart;