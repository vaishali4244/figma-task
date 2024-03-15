import './signature.css';

const Signature = () => {
    return (

        <div className="sign-container">
            <div className="sign-image">
                <img src={require("../assets/images/image 9.png")} alt="" />
            </div>
            <div className="sign-content">
                <p className="content">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className="more-p ">Tim Smith </p>
                <p className="sub-content"> British Dragon Boat Racing Association</p>
                <div className="sign-clients">
                    <div className="client-img">
                        <img src={require("../assets/images/Logo.png")} alt="" />
                        <img src={require("../assets/images/Logo (1).png")} alt="" />
                        <img src={require("../assets/images/Logo (7).png")} alt="" />
                        <img src={require("../assets/images/Logo (3).png")} alt="" />
                        <img src={require("../assets/images/Logo (5).png")} alt="" />
                        <img src={require("../assets/images/Logo (6).png")} alt="" />
                        <div className="more">
                            <p className="more-p">Meet all customers </p>
                            <img className='nav-img' src={require("../assets/images/Rightg.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signature;
