export const selectCity = (city) => { //exported with named export
    //return an action
    return {
        type: 'SELECT_CITY',
        payload: city
    }

}
export const selectFavoriteCity = (name, key) => { //exported with named export
    //return an action
    return {
        type: 'SELECT_FAVORITE_CITY',
        payload: {
            name: name,
            key: key
          }
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