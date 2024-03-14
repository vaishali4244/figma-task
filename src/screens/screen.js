
import Clients from "../components/clients";
import Community from "../components/community";
import HeroPage from "../components/heroPage";
import Navbar from "../components/navbar";

const Screen = () => {
   

    return (
        <div className="screen">
            <Navbar />
            <HeroPage/>
            <Clients/>
            <Community />
        </div>
    )
}

export default Screen;