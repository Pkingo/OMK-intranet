import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header_style.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
            <Link to="/">Home</Link>
                {this.renderLinks()}
            </div>
        );
    }

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div>
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/Profile">Profile</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);

