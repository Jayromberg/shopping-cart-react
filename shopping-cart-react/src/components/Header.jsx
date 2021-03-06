import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container-title">
                    <span className="title">
                        <strong>REACT</strong> trybe shopping
                    </span>
                </div>
                <span className="material-icons">
                    local_mall
                </span>
                <div className="container-cartTitle">
                    <span className="cart__title"> Meu carrinho</span>
                </div>
            </header>
        )
    }
}

export default Header