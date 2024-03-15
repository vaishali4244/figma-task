import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="copyright">
                <p>Copyright © 2020 Landify UI Kit.</p>
                <p>All rights reserved</p>
                <div className="contact-img">
                    <img src={require("../assets/images/Social Icons.png")} alt="" />
                    <img src={require("../assets/images/ball.png")} alt="" />
                    <img src={require("../assets/images/twit.png")} alt="" />
                    <img src={require("../assets/images/yt.png")} alt="" />

                </div>
            </div>
            <div className="footer-category">
                <div className="content">
                    <p className="footer-p">Company</p>
                    <p >About us</p>
                    <p >Blog</p>
                    <p >Contact us</p>
                    <p >Pricing</p>
                    <p >Testimonials</p>
                </div>
                <div className="content">
                    <p className="footer-p">Support</p>
                    <p >Help center</p>
                    <p >Terms of service</p>
                    <p >Legal</p>
                    <p >Privacy policy</p>
                    <p >Status</p>
                </div>
                <div className="content">
                <div className="side-menu">
                    <p className="footer-p">Stay up to date</p>
                    <div className="input-bar">
                    <input type="text" placeholder='Your email address' />
                    <img src={require('../assets/images/send.png')} alt="" />

                    </div>
                </div>
   
                </div>
            </div>
        </div>
    )
}

export default Footer;
