import React from "react";
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        const {computador: {id, title, price, thumbnail}} = this.props
        return(
            <section className="item">
                <span className="item__sku">{id}</span>
                <span className="item__title">{title}</span>
                <img className="item__image" src={thumbnail} alt={title} />
                <span className="item__price">{`R$ ${price.toFixed(2)}`}</span>
                <button className="item__add">Adicionar ao carrinho!</button>
            </section>
        )
    }
}

Card.propTypes = {
    computador : PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
    }).isRequired,
};

export default Card;