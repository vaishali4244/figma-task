import './localBusiness.css';

const LocalBusiness = () => {
    return (
        <div className="local-container">
            <div className="local-content">
                <p className='client-p'>
                    Helping a local
                </p>
                <p className='client-p local-green'>
                    business reinvent itself
                </p>
                <p >We reached here with our hard work and dedication</p>
            </div>
            <div className="local-data">
                <div className="local-value">
                    <img src={require("../assets/images/Vector.png")} alt="" />
                    <div className='local-user'>
                        <p className="number">2,245,341</p>
                        <p>Members</p>
                    </div>
                </div>
                <div className="local-value">
                    <img src={require("../assets/images/Icon (3).png")} alt="" />
                    <div className='local-user'>
                        <p className="number">46,328</p>
                        <p>Clubs</p>
                    </div>
                </div>
                <div className="local-value">
                    <img src={require("../assets/images/Icon (4).png")} alt="" />
                    <div className='local-user'>
                        <p className="number">828,867</p>
                        <p>Event Bookings</p>
                    </div>
                </div>
                <div className="local-value">
                    <img src={require("../assets/images/Icon (6).png")} alt="" />
                    <div className='local-user'>
                        <p className="number">1,926,436</p>
                        <p>Payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocalBusiness;
