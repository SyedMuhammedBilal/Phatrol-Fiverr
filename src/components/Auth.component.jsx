import React from 'react';
import logo from '../assets/phatrol.png';
import "../styles/AuthHeader.css"
import LicenseKey from './LicenseKey.component';

export default function AuthComponent() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="head-cont">
                    <h1 className="heading"><i>Phatrol</i></h1>
                </div>
                <LicenseKey />
            </header>
        </div>
    )
}
