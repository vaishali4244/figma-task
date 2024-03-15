
import Clients from "../components/clients";
import Community from "../components/community";
import Demo from "../components/demo";
import DesignSite from "../components/designSite";
import Footer from "../components/footer";
import HeroPage from "../components/heroPage";
import LocalBusiness from "../components/localBusiness";
import Marketing from "../components/marketing";
import Navbar from "../components/navbar";
import Signature from "../components/signature";
import UnseenContent from "../components/unseenContent";

const Screen = () => {


    return (
        <div className="screen">
            <Navbar />
            <HeroPage />
            <Clients />
            <Community />
            <UnseenContent />
            <LocalBusiness />
            <DesignSite />
            <Signature />
            <Marketing />
            <Demo />
            <Footer />
        </div>
    )
}

export default Screen;