import React from 'react';
import InputField from './InputField';
import SelectedCityWeather from './SelectedCityWeather';
import '../style/App.css';

const App = () => {

    return (
        <div className="AppContainer">
            <InputField />
            <div className="ui container grid">
                <SelectedCityWeather />

            </div>
        </div>
    )
}

export default App;