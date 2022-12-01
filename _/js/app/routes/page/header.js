import React from 'react';
import { Link } from 'react-router';
import auth from '../auth';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    getLogoutLink() {
        if(auth.isLoggedIn()) {
            return [
                {route: '/admin', label: "Admin"}
            ].map((link, index) => {
                return <li key={index}><Link to={link.route}>{link.label}</Link></li>
            });
        }
    }

    render() {
        return (
            <div className="head">
                <div className="logo">
                    <Link to="/">
                        <img src="_/img/logo.png" />
                    </Link>
                </div>
                <ul className="links">
                    <li><Link to="/">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {this.getLogoutLink()}
                </ul>
            </div>
        );
    }
}

export default Header;