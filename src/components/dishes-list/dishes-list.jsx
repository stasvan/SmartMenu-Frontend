import React from 'react';
import PropTypes from 'prop-types';

import DishListItem from '../dish-list-item/dish-list-item';

import './dishes-list.scss';

function DishesList({ dishesList }) {
  return (
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
}

DishesList.propTypes = {
  dishesList: PropTypes.arrayOf(PropTypes.object),
};

DishesList.defaultProps = {
  dishesList: [],
};

export default DishesList;
