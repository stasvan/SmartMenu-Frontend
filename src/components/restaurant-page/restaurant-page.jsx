import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import SectionsPanel from '../sections-panel/sections-panel';
import RestaurantFetchService from '../../services/restaurant-fetch-service';

import './restaurant-page.scss';

const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState({});
  const [selectedMenu, setSelectedMenu] = useState({});

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      const service = RestaurantFetchService();
      const result = await service.fetchRestaurantInfo();
      setRestaurant(result.restaurant);
      setSelectedMenu(result.restaurant.menus[0]);
    };

    fetchRestaurantInfo();
  }, []);

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu.value);
  };

  if (!restaurant) {
    return (<></>);
  }

  const menus = restaurant.menus
    ? restaurant.menus.map(
      (menu) => ({
        value: menu,
        label: menu.name,
      }),
    )
    : [];

  const languages = restaurant.languages
    ? restaurant.languages.map(
      (menu) => ({
        value: menu.id,
        label: menu.name,
      }),
    )
    : [];

  const menuDefaultValue = {
    label: selectedMenu.name,
    value: selectedMenu,
  };

  return (
    <>
      <div className="top-images">
        <img
          className="logo-background"
          src={restaurant.logoBackground}
          alt=""
        />
        <img
          className="logo"
          src={restaurant.logo}
          alt=""
        />
      </div>
      <div className="content">
        <div className="general-info">
          {restaurant.name}
          <div>
            <a href={restaurant.siteLink}>
              <img src="globe.svg" alt="" />
            </a>
            <a href={restaurant.facebookLink}>
              <img src="facebook.png" alt="" />
            </a>
            <a href={restaurant.instagramLink}>
              <img src="instagram.png" alt="" />
            </a>
          </div>
        </div>
        <div className="menu-control-pannel">
          <Select
            options={menus}
            value={menuDefaultValue}
            onChange={handleMenuChange}
            className="menu-select"
          />
          <Select
            options={languages}
            value={languages[0]}
            className="language-select"
          />
        </div>
        <SectionsPanel sections={selectedMenu.sections} />
      </div>
    </>
  );
};

export default RestaurantPage;
