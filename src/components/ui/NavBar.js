import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

const NavBar = () => {
    const { user: { name }, dispatch } = useContext( AuthContext );
    const history = useHistory();

    const handleLogout = () => {
        dispatch( {
            type: types.logout
        } )

        history.replace( '/login' );
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
            <Link className="navbar-brand" to="/">Heroes App</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/marvel">Marvel</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/dc">DC</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/search">Search</NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{ name }</span>
                    <button className="btn btn-danger active nav-item nav-link" onClick={ handleLogout }>Logout</button>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
