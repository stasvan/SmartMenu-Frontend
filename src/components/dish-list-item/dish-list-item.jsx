import React, { Component } from 'react';

class DishListItem extends Component {

    render() {
        let {dish} = this.props;
        return (
            <div className="dish">
                <p className="dish__name">{dish.name}</p>
                <p className="dish__portion">{dish.portion}</p>
                <p className="dish__price">{dish.price}</p>
            </div>
        )
    }
}

export default DishListItem;