import React from "react";

class Card extends React.Component {
    render() {
        const {computador: {id, title, price, thumbnail}} = this.props
        return(
            <div className="card">
                <p>{id}</p>
                <p>{title}</p>
                <img src={thumbnail} alt={title} />
                <p>{price}</p>
            </div>
        )
    }
}

export default Card;