import React from "react";

class Cart extends React.Component {
    render() {
        return(
            <section className="cart">
                <ol className="cart__items"></ol>
                <span id="price"></span>
                <button className="empty-cart">Esvaziar carrinho</button>
            </section>
        )
    }
}

export default Cart;