import React from "react";
import Card from './Card';

class Items extends React.Component {
    render(){
        const { data } = this.props
        return(
            <section className="items">
                {data.map((item) =>  <Card key={item.id} computador = {item} />)}
            </section>
        )
    }
}

export default Items;