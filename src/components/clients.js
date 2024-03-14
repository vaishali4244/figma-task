import React from 'react';
import './clients.css';

const Clients = () => {
    return (
        <div className='client-container'>
            <p className='client-p'>Our Clients</p>
            <p className="sub-content">We have been working with some Fortune 500+ clients</p>
            <div className="client-img">
                <img src={require("../assets/images/Logo.png")} alt="" />
                <img src={require("../assets/images/Logo (1).png")} alt="" />
                <img src={require("../assets/images/Logo (7).png")} alt="" />
                <img src={require("../assets/images/Logo (3).png")} alt="" />
                <img src={require("../assets/images/Logo (5).png")} alt="" />
                <img src={require("../assets/images/Logo (6).png")} alt="" />
                <img src={require("../assets/images/Logo (2).png")} alt="" />
            </div>
        </div>
    )
}

export default Clients;
