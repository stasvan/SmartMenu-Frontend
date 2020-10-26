import React, {Component} from 'react';
import DishListItem from '../dish-list-item/dish-list-item'
import './dishes-list.scss';

class DishesList extends Component{

    render () {
        let {dishesList} = this.props;

        if (!dishesList) {
            return (<div></div>)
        }

        return (
            <div className="dishes-list">
                {
                    dishesList
                        .map(item =>
                            <DishListItem 
                                dish={item}
                            />
                        )
                }
            </div>
        )
    }
}

export default DishesList;