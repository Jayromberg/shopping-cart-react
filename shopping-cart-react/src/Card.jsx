import React from "react";

class Card extends React.Component {
    render() {
        const {computador: {id, title, price, thumbnail}} = this.props
        return(
            <section className="item">
                <span className="item__sku">{id}</span>
                <span className="item__title">{title}</span>
                <img className="item__image" src={thumbnail} alt={title} />
                <span className="item__title">{`R$ ${price.toFixed(2)}`}</span>
                <button className="item__add">Adicionar ao carrinho!</button>
            </section>
        )
    }
}

export default Card;