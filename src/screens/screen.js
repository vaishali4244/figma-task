
import Clients from "../components/clients";
import Community from "../components/community";
import Demo from "../components/demo";
import DesignSite from "../components/designSite";
import HeroPage from "../components/heroPage";
import Marketing from "../components/marketing";
import Navbar from "../components/navbar";
import UnseenContent from "../components/unseenContent";

const Screen = () => {


    return (
        <div className="screen">
            <Navbar />
            <HeroPage />
            <Clients />
            <Community />
            <UnseenContent />
            <DesignSite />
            <Marketing />
            <Demo />
        </div>
    )
}

export default Screen;