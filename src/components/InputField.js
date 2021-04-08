import React, { useState, useEffect } from 'react';
import '../style/InputField.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

const APIKEY = "CicQVGfqVfoy6AJBEauazxIatO1s3YCD";

const InputField = (props) => {

    const [term, setTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);


    useEffect(() => {
        const timerId = setTimeout(() => {
            if (term !== "") {
                setDebouncedTerm(term);
            }
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }
    }, [term])


    useEffect(() => {
        const search = async () => {
            const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${debouncedTerm}`);
            let autoCompleteList = res.data.map((city) => {
                return { name: city.LocalizedName, key: city.Key };
            })
            console.log(autoCompleteList)
            setAutocompleteSuggestions(autoCompleteList);
        }
        if (debouncedTerm.length > 0) {
            search();
        }

    }, [debouncedTerm]);

    const RenderAutocompleteCityList = () => {
        return (
            autocompleteSuggestions.map((city) => {
                return <option id={`${city.key}`} value={`${city.name}`} />
            })
        )
    }

    const submitChosenCity = (e) => {
        e.preventDefault();
        const city = autocompleteSuggestions.filter(city =>
            city.name === debouncedTerm
        );
        console.log(city);
        props.selectCity(city[0])
    }


    return (
        <div className="ui icon input">
            <form autoComplete="on">
                <label>Enter City:</label>
                <input type="text" list="autocomplete"
                    onChange={event => setTerm(event.target.value)} value={term} />
                <button onClick={(e) => submitChosenCity(e)}><i className="search icon" ></i></button>
                {autocompleteSuggestions.length > 0 ?
                    <datalist id="autocomplete">
                        {RenderAutocompleteCityList()}
                    </datalist> : null}
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    console.log(state);
    return { selectedCityWeather: state.selectedCityWeather }
}

export default connect(mapStateToProps, {
    selectCity: selectCity
})(InputField);
//update daily and weekly weather of chosen city here



