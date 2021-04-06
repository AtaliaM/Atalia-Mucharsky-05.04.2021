import React, { useState, useEffect } from 'react';
import '../style/InputField.css';
import autocomplete from '../apis/autocomplete';
// import currentWeather from '../apis/currentWeather';
import {connect} from 'react-redux';
import {selectCity} from '../actions';


const APIKEY = "CicQVGfqVfoy6AJBEauazxIatO1s3YCD";

const InputField = (props) => {

    console.log(props);

    const [term, setTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [ChosenCity, setChosenCity] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (term !== "") { //so if the user *deletes* the searching term, the debouncedterm useEffect won't run. causes component to crush because of invalid search
                setDebouncedTerm(term);
            }
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term])


    useEffect(() => { //first argument of useEffect is always gonna be a function. we have to tell useEffect when to be executed
        const search = async () => {
            const res = await autocomplete.get(`?apikey=${APIKEY}&q=${debouncedTerm}`);
            console.log(res);
        }
        search();

    }, [debouncedTerm]);

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="ui icon input">
            <input type="text" placeholder="Search City" className="center"
                onChange={event => setTerm(event.target.value)} value={term} />
            <button onClick={()=>props.selectCity(ChosenCity)}><i className="search icon" ></i></button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {selectedCityWeather: state.selectedCityWeather}
}

export default connect(mapStateToProps, {
    selectCity: selectCity
})(InputField);
//update daily and weekly weather of chosen city here



