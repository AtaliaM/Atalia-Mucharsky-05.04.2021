import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainScreen from './MainScreen';
import '../style/App.css';
import Header from './Header';
import DisplayFavorites from './DisplayFavorites';

const App = () => {

    return (
        <div className="AppContainer">
            <BrowserRouter>
                {/* <div> */}
                    <Header />
                    <Route path="/" exact component={MainScreen} />
                    <Route path="/favorites" component={DisplayFavorites} />

                {/* </div> */}
            </BrowserRouter>
        </div>
    )
}

export default App;