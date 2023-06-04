import "./section-three.scss"
import Tech from "../components/tech";
import GundamFade from "../assets/gundam-fade.png"
import RedLineLeft from "../assets/red-line-left.png"
import RedLineRight from "../assets/red-line-right.png"
import LongDividerDown from "../assets/long-divider-down.png"

const SectionThree = () => {
    return (
        <div className="section-dream">
            <div>
                <p className="dream-exe-left">STARTING DREAM.EXE ...</p>
                <img src={RedLineLeft} alt="" />
            </div>
            <div className="dream-container"> 
                <div className="gundam-container">
                    <img src={GundamFade} className="gundam-fade" style={{width: "100%"}} alt="" />
                    <div className="creative-container">
                    <h2>We bring your</h2>
                    <h2>imagination to life...</h2>
                    <div className="flex tech-container">
                        <Tech 
                            title="Figma"
                        />
                        <Tech 
                            title="Creative Cloud"
                        />
                        <Tech 
                            title="Game Engines"
                        />
                        <Tech 
                            title="DAWs"
                        />
                        <Tech 
                            title="Virtual Reality"
                        />
                        <Tech 
                            title="Augmented Reality"
                        />
                    </div>
                </div>
                </div>
            </div>
            <div>
                <p className="dream-exe-left">DREAM.EXE COMPLETE</p>
                <img src={RedLineRight} alt="" />
            </div>
            <div className="long-divider-down-container">
                <img src={LongDividerDown} alt="" />
            </div>
        </div>
    );
};

export default SectionThree;