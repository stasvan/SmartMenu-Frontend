import restaurant from '../mocks/restaurant-info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RestaurantFetchService = () => {
  const fetchRestaurantInfo = () => delay(500)
    .then(() => restaurant);

  return {
    fetchRestaurantInfo,
  };
};

export default RestaurantFetchService;
