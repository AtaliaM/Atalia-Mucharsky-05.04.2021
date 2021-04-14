import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myLocalStorage from '../LocalStorage';
import { connect } from 'react-redux';
import { selectFavoriteCity } from '../actions';
import '../style/DisplayFavorites.css';

const APIKEY = "xbaBtkO0fpEDW7yX5eyCDLaFTThffoab";
// "CicQVGfqVfoy6AJBEauazxIatO1s3YCD";

const DisplayFavorites = (props) => {

    const [favorites, setFavorites] = useState([]);
    const [citiesWeather,setCitiesWeather] = useState([]);

    useEffect(() => {
        const favorites = myLocalStorage.get("favorite-cities") || [];
        setFavorites([...favorites]);
    }, [])

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            const temp = [];
            for (let i = 0; i < favorites.length; i++) {
                let res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${favorites[i].key}?apikey=${APIKEY}`);
               temp.push(res.data[0]);
                console.log(temp)
            }
            setCitiesWeather([...temp]);
        }
        if (favorites.length !== 0) {
            fetchCurrentWeather();
        }
    }, [favorites])


    const renderFavorites = () => {
        console.log(citiesWeather.length);
        return (
            favorites.map((favorite, i) => {
                return (
                    <div key={`${favorite.key}`} className="city-container">
                        <h4>{`Today's weather at ${favorite.name}`}</h4>
                        <div className="column">
                            <div className="day ui segment">
                                <h3>{`${citiesWeather[i].Temperature.Metric.Value}°C`}</h3>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="ui five column grid">
            {citiesWeather.length !== 0 ? renderFavorites() : <div>You have no favorites at the moment</div>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return { addFavoriteCity: state.addFavoriteCity }
}

export default connect(mapStateToProps, {
    selectFavoriteCity: selectFavoriteCity
})(DisplayFavorites);