import BringDreams from "../assets/bring-dreams.png"
import Notification from "../components/notification";
import DivUp from "../assets/divider-up.png"
import DivDown from "../assets/divider-down.png"
import LongDividerDown from "../assets/long-divider-down.png"
import "./section.scss"

const Section = () => {
    return (
        <div className="section">
            <div className="center">
                <h1>Bringing dreams to life</h1>
                <p>Avant-garde technology, extraordinary web applications, digital experiences, and immersive solutions.</p>
            </div>
            <div>
                <img src={BringDreams} className="section-image" alt="" />
            </div>
            <Notification />
            <div className="section-blurbs flex space-around align-center">
                <div className="section-blurb">
                    <h3>Agents of the web</h3>
                    <p>At Dream Maker Corp, our developers are seasoned experts, honing their skills to craft extraordinary digital experiences</p>
                </div>
                <div>
                    <img src={DivUp} alt="" />
                </div>
                <div className="section-blurb">
                    <h3>Passion for immersion</h3>
                    <p>We Immerse your audience in captivating digital realms, transforming app development into unreal experiences</p>
                </div>
                <div>
                    <img src={DivDown} alt="" />
                </div>
                <div className="section-blurb">
                    <h3>Total digital harmony</h3>
                    <p>We unleash the power of visionary strategies that shatter boundaries and propel your business into a new era of success and digital harmony.</p>
                </div>
                <div>
                    <img src={DivUp} alt="" />
                </div>
                <div className="section-blurb">
                    <h3>Addicted to creativity</h3>
                    <p>We need to be creative, it’s in our blood. Everything we push out encompasses who we are and that means a big splash of out of the box thinking.</p>
                </div>
            </div>
            <div>
                <img src={LongDividerDown} alt="" />
            </div>
        </div>
    );
};

export default Section;