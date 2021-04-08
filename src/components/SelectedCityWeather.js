import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectFavoriteCity } from '../actions';
import '../style/SelectedCityWeather.css';
import myLocalStorage from '../LocalStorage';

const APIKEY = "xbaBtkO0fpEDW7yX5eyCDLaFTThffoab";
// "CicQVGfqVfoy6AJBEauazxIatO1s3YCD";

const SelectedCityWeather = (props) => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [weeklyWeather, setWeeklyWeather] = useState(null);

    // console.log(currentWeather);
    // console.log(weeklyWeather);
    // console.log(props);

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${props.selectedCityWeather.key}?apikey=${APIKEY}`);
            setCurrentWeather(res.data);
            console.log(res)
        }
        fetchCurrentWeather();
    }, [props.selectedCityWeather.key])

    useEffect(() => {
        const fetchWeeklytWeather = async () => {
            const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${props.selectedCityWeather.key}?apikey=${APIKEY}`);
            setWeeklyWeather(res.data);
            console.log(res);
        }
        fetchWeeklytWeather();
    }, [props.selectedCityWeather.key]);


    const addToFaves = () => {
        let citySaved;
        const savedcities = myLocalStorage.get("favorite-cities") || [];

        for (let i = 0; i < savedcities.length; i++) {
            if (savedcities[i].name === props.selectedCityWeather.name) {
                citySaved = true;
                break;
            }
        }
        if (!citySaved) {
            myLocalStorage.save("favorite-cities", props.selectedCityWeather);
        }
    }

    return (
        <div className="ui five column grid">
            {weeklyWeather ?
                <>
                    <div className="favorite-container">
                        <button className="favorite" onClick={()=>addToFaves()}>Add to favorites</button>
                    </div>
                    <h2>{`This week's weather at ${props.selectedCityWeather.name}`}</h2>
                    <div className="column">
                        <div className="day ui segment">
                            <h2>Temp</h2>
                            <h3>{Math.floor((weeklyWeather.DailyForecasts[0].Temperature.Maximum.Value - 32) * 5 / 9)}°C</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="day ui segment">
                            <h2>Temp</h2>
                            <h3>{Math.floor((weeklyWeather.DailyForecasts[1].Temperature.Maximum.Value - 32) * 5 / 9)}°C</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="day ui segment">
                            <h2>Temp</h2>
                            <h3>{Math.floor((weeklyWeather.DailyForecasts[2].Temperature.Maximum.Value - 32) * 5 / 9)}°C</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="day ui segment">
                            <h2>Temp</h2>
                            <h3>{Math.floor((weeklyWeather.DailyForecasts[3].Temperature.Maximum.Value - 32) * 5 / 9)}°C</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="day ui segment">
                            <h2>Temp</h2>
                            <h3>{Math.floor((weeklyWeather.DailyForecasts[4].Temperature.Maximum.Value - 32) * 5 / 9)}°C</h3>
                        </div>
                    </div>
                </>
                : null}
            {currentWeather ?
                <div>
                    <h2>Today's weather:</h2>
                    <div className="today-container">
                        <div className="day ui segment today">
                            <h2>Temp</h2>
                            <h3>{currentWeather[0].Temperature.Metric.Value}°C</h3>
                        </div>
                    </div>
                </div>
                : null}
        </div>

    )

}

const mapStateToProps = (state) => {
    return { selectedCityWeather: state.selectedCityWeather }
}

export default connect(mapStateToProps, {
    selectFavoriteCity: selectFavoriteCity
})(SelectedCityWeather);
