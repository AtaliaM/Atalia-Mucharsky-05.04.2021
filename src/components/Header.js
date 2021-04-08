import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';


class Header extends React.Component {

    render() {
        return (
            <>
                <div className="header-container">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/favorites">Favorites</Link></button>
                </div>
            </>

        )
    }
}

export default Header;