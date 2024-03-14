import './heroPage.css';

const HeroPage=()=>{
    return(
        <>
        <div className='hero-container'>
            <div className="hero-content">
                <p className='p-main'>
                Lessons and insights 
                </p>
                <p className='p-green'>from 8 years</p>
                <p className="sub-content">Where to grow your business as a photographer: site or social media?</p>
                <button className='hero-btn'>Register</button>
            </div>
            <div className="hero-image">
                <img src={require("../assets/images/Illustration.png")} alt="" />
            </div>
        </div>
        <div className="hero-dot">
        <img className='dot' src={require("../assets/images/Dot.png")} alt="" />
        </div>
            </>
            
    )
}

export default HeroPage