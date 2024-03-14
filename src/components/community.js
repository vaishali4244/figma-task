import { data } from "./data";
import './community.css';

const Community = () => {

    return (
        <div className="community-container">
            <p className='client-p'>Manage your entire community </p>
            <p className='client-p'>in a single system</p>
            <p className="sub-content">Who is Nextcent suitable for?
            </p>
            <div className="community-content">

                {data?.map((item, idx) => {
                    return (
                        <div key={idx} className="community-card" >
                            <img src={item?.source} className="community-img" alt={item?.alt} />

                            <h4 className="card-title">{item?.title}</h4>
                            <p className="card-p">{item?.content}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Community;
