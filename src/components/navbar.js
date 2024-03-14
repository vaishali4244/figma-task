import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-options">
                <h1>P
                    <span className='heading-span'>cl</span>
                </h1>

            </div>
            <div className="nav-options">

                <button className="nav-opt " href='#'>Home</button>
                <button className="nav-opt " href='#'>Features</button>
                <button className="nav-opt " href='#'>Community</button>
                <button className="nav-opt " href='#'>Blog</button>
                <button className="nav-opt " href='#'>Pricing</button>
                <button className="nav-opt nav-btn">Register Now   <img className='nav-img' src={require("../assets/images/Right.png")} alt="" /></button>

            </div>

        </div>

    )
}

export default Navbar;