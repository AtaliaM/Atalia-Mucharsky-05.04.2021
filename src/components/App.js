import React from 'react';
import InputField from './InputField';
import SelectedCityWeather from './SelectedCityWeather';

const App = () => {

    return (
        <>
            <InputField />
            <div className="ui container grid">
                <SelectedCityWeather />

            </div>
        </>
    )
}

export default App;