import React from 'react';
import PropTypes from 'prop-types';

const DishListItem = ({ dish }) => (
  <div className="dish">
    <p className="dish__name">{dish.name}</p>
    <p className="dish__portion">{dish.portion}</p>
    <p className="dish__price">{dish.price}</p>
  </div>
);

DishListItem.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    portion: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default DishListItem;
