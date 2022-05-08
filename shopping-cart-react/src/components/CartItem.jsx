import React from "react";

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

export default CartItem;