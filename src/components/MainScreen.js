import React from 'react';
import InputField from './InputField';
import SelectedCityWeather from './SelectedCityWeather';

const MainScreen = () => {

    return (
        <>
            <InputField />
            <div className="ui container grid">
                <SelectedCityWeather />

            </div>
        </>
    )


}

export default MainScreen;