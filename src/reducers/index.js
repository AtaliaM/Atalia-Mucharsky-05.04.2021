import { combineReducers } from "redux";
import currentWeather from '../apis/currentWeather';
import weeklyWeather from '../apis/weeklyWeather';

const APIKEY = "CicQVGfqVfoy6AJBEauazxIatO1s3YCD";

const selectedCityWeatherReducer = (selectedCity = {name:"Tel Aviv", locationKey: "215854"},action) => {
    const searchWeather = async() => {
        console.log("in...")
        const currentWeatherRes = await currentWeather.get(`${action.payload.locationKey}?apikey=${APIKEY}`);
        console.log(currentWeatherRes);
        const weeklyWeatherRes = await weeklyWeather.get(`${action.payload.locationKey}?apikey=${APIKEY}`);
        console.log(weeklyWeatherRes);
    }
    if(action.type === 'SELECT_CITY') {
        searchWeather();
        return {
            selectedCity: action.payload.selectedCity.name,
            cityLocationKey: action.payload.selectedCity.locationKey,
            currentWeather: telAvivDailyWeather,
            weeklyWeather: telAvivWeeklyWeather
        }
    }
    return selectedCity;
}


export default combineReducers({
    selectedCityWeather: selectedCityWeatherReducer,
})

const telAvivDailyWeather = [
    {
      "LocalObservationDateTime": "2021-04-05T20:05:00+03:00",
      "EpochTime": 1617642300,
      "WeatherText": "Clear",
      "WeatherIcon": 33,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 24.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 76,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }
  ]

  const telAvivWeeklyWeather = {
    "Headline": {
      "EffectiveDate": "2021-04-06T14:00:00+03:00",
      "EffectiveEpochDate": 1617706800,
      "Severity": 5,
      "Text": "Possible danger of dehydration and heat stroke while doing strenuous activities Tuesday afternoon",
      "Category": "heat",
      "EndDate": "2021-04-06T20:00:00+03:00",
      "EndEpochDate": 1617728400,
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2021-04-06T07:00:00+03:00",
        "EpochDate": 1617681600,
        "Temperature": {
          "Minimum": {
            "Value": 63,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 93,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
      },
      {
        "Date": "2021-04-07T07:00:00+03:00",
        "EpochDate": 1617768000,
        "Temperature": {
          "Minimum": {
            "Value": 61,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
      },
      {
        "Date": "2021-04-08T07:00:00+03:00",
        "EpochDate": 1617854400,
        "Temperature": {
          "Minimum": {
            "Value": 58,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 74,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
      },
      {
        "Date": "2021-04-09T07:00:00+03:00",
        "EpochDate": 1617940800,
        "Temperature": {
          "Minimum": {
            "Value": 55,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 68,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
      },
      {
        "Date": "2021-04-10T07:00:00+03:00",
        "EpochDate": 1618027200,
        "Temperature": {
          "Minimum": {
            "Value": 54,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 63,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 36,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
      }
    ]
  }