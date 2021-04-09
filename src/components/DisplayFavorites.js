import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myLocalStorage from '../LocalStorage';
import { connect } from 'react-redux';
import {selectFavoriteCity} from '../actions';

const APIKEY = "xbaBtkO0fpEDW7yX5eyCDLaFTThffoab";
// "CicQVGfqVfoy6AJBEauazxIatO1s3YCD";

const DisplayFavorites = (props) => {

    console.log(props);

    const [favorites, setFavorites] = useState([]);
    const citiesWeather = [];

    useEffect(() => {
        const favorites = myLocalStorage.get("favorite-cities") || [];
        setFavorites([...favorites]);
    },[])


    const currentWeather = async()=> {
        for (let i=0; i <favorites.length; i++) {
            let res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${favorites[i].key}?apikey=${APIKEY}`);
            citiesWeather.push(res.data[i]);
            console.log(citiesWeather)
        }
    }

    const renderFavorites = () => {
        currentWeather();
        console.log(citiesWeather);
        return (
            favorites.map((favorite, i) => {
                return (
                    <div key={`${favorite.key}`}>
                        <h2>{`Today's weather at ${favorite.name}`}</h2>
                        <div className="column">
                            <div className="day ui segment">
                                <h3>{`${citiesWeather[i]}°C`}</h3>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="ui five column grid">
            {favorites.length !== 0 ? renderFavorites() : <div>You have no favorites at the moment</div>}
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state);
    return { addFavoriteCity: state.addFavoriteCity }
}

export default connect(mapStateToProps, {
    selectFavoriteCity: selectFavoriteCity
})(DisplayFavorites);