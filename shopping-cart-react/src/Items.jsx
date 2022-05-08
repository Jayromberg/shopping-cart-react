import React from "react";
import Card from './Card';
import objetoComputado from './search'

class Items extends React.Component {
    render(){
        return(
            <div className="itemsShop">
                {objetoComputado.results.map((item) =>  <Card computador = {item} />)}
            </div>
        )
    }
}

export default Items;