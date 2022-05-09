import React from "react";
import PropTypes from 'prop-types';

class CartItem extends React.Component {
    render() {
        const { item: { id, title, price, thumbnail}  } = this.props;
        return(
            <>
            <li>
                <img src={thumbnail} alt={title} />
                <p>
                {`${id} | ${title} | ${price.toFixed(2)}`}
                </p>
            </li>
            </>
        )
    }
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
    }).isRequired,
};

export default CartItem;