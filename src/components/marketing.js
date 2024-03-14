import { marketingData } from "./marketingData";
import './marketing.css';

const Marketing = () => {

    return (
        <div className="market-container">
            <p className='client-p'>Caring is the new marketing </p>
            <p className="market-p">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
            </p>
            <div className="community-content">

                {marketingData?.map((item, idx) => {
                    return (
                        <div key={idx} className="market-card" >
                            <img src={item?.source} className="market-img" alt={item?.alt} />
                            <div className="market-info">
                                <p className="info-p">{item?.content}</p>
                                <div className="more">
                                    <p className="more-p">Readmore </p>
                                    <img className='nav-img' src={require("../assets/images/Rightg.png")} alt="" />

                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Marketing;
