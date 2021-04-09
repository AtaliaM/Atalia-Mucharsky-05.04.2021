export const selectCity = (city) => { //exported with named export
    //return an action
    return {
        type: 'SELECT_CITY',
        payload: city
    }

}
export const selectFavoriteCity = (city) => { //exported with named export
    //return an action
    return {
        type: 'ADD_FAVORITE_CITY',
        payload: city
    }

}
export const removeFavoriteCity = (city) => { //exported with named export
    //return an action
    return {
        type: 'REMOVE_FAVORITE_CITY',
        payload: city
    }

}

// export const selectedCityWeather = (city,currentWeather,weeklyWeather) => { //exported with named export
//     //return an action
//     return {
//         type: 'GET_CITY_WEATHER',
//         payload: {
//             city: city,
//             currentWeather: currentWeather,
//             weekleWeather: weeklyWeather
//           }
//     }

// }