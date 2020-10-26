import React, {Component, Fragment} from 'react';
import Select from 'react-select';
import SectionsPanel from '../sections-panel/sections-panel'
import * as restaurantService from '../../services/restaurant-fetch-service';
import './restaurant-page.scss';

class RestaurantPage extends Component{

    state = {
        restaurant: {},
        selectedMenu: {}
    }

    async componentDidMount() {
        const {restaurant} = await restaurantService.fetchRestaurantInfo();

        this.setState({
            restaurant,
            selectedMenu: restaurant.menus[0]
        });
    }

    handleMenuChange = (menu) => {
        this.setState({
            selectedMenu: menu.value
        })
    }

    render () {

        const menus = this.state.restaurant.menus
            ? this.state.restaurant.menus.map(
                menu => 
                    ({
                        value: menu,
                        label: menu.name
                    })
            )
            : [];

        const languages = this.state.restaurant.languages
            ? this.state.restaurant.languages.map(
                menu => 
                    ({
                        value: menu.id,
                        label: menu.name
                    })
            )
            : [];

        const menuDefaultValue = {
            label: this.state.selectedMenu.name,
            value: this.state.selectedMenu
        };

        return (
            <Fragment>
                <div className="top-images">
                    <img
                        className="logo-background"
                        src={this.state.restaurant.logoBackground}
                        alt=""
                    />
                    <img
                        className="logo"
                        src={this.state.restaurant.logo}
                        alt=""
                    />
                </div>
                <div className="content">
                    <div className="general-info">
                        {this.state.restaurant.name}
                        <div>
                            <a href={this.state.restaurant.siteLink}>
                                <img src="globe.svg" alt=""/>
                            </a>
                            <a href={this.state.restaurant.facebookLink}>
                                <img src="facebook.png" alt=""/>
                            </a>
                            <a href={this.state.restaurant.instagramLink}>
                                <img src="instagram.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="menu-control-pannel">
                        <Select
                            options={menus}
                            value={menuDefaultValue}
                            onChange={this.handleMenuChange}
                            className="menu-select"
                        />
                        <Select
                            options={languages}
                            value={languages[0]}
                            className="language-select"
                        />
                    </div>
                    <SectionsPanel sections={this.state.selectedMenu.sections}/>
                </div>
            </Fragment>
        )
    }
}

export default RestaurantPage;