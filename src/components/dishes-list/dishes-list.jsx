import React from 'react';
import PropTypes from 'prop-types';

import DishListItem from '../dish-list-item/dish-list-item';

import './dishes-list.scss';

const DishesList = ({ dishesList }) => (
  <div className="dishes-list">
    {
      dishesList
        .map((item) => (
          <DishListItem
            dish={item}
          />
        ))
    }
  </div>
);

DishesList.propTypes = {
  dishesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    portion: PropTypes.string,
    price: PropTypes.string,
  })),
};

DishesList.defaultProps = {
  dishesList: [],
};

export default DishesList;
