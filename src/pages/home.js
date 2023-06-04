import "./home.scss"
import Hero from "../components/hero";
import SubHero from "../components/sub-hero";
import Section from "../sections/section";
import SectionCard from "../sections/section-card";
import SectionTwo from "../sections/section-two";
import SectionThree from "../sections/section-three";
import SectionFour from "../sections/section-four";
import SectionFive from "../sections/section-five";
import SectionSixForm from "../sections/section-six";
import SectionSevenProjects from "../sections/section-seven";
import SectionEight from "../sections/section-eight";
import Footer from "../sections/footer";
import Disclaimer from "../sections/disclaimer";



const Home = () => {
    return (
        <div>
            <Hero />
            <SubHero />
            <div className="home-container">
                <Section />
                <SectionCard />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSixForm />
                <SectionSevenProjects />
                <SectionEight />
                <Footer />
            </div>
            <Disclaimer />
        </div>   
    );
}

export default Home; 