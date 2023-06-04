import "./section-four.scss"
import WildSurreal from "../assets/wild-surreal.png"
import LongDividerDown from "../assets/long-divider-down.png"
import Tech from "../components/tech";

const SectionFive = () => {
    return (
        <div className="section-dream">
            <div className="dream-container"> 
                <div className="gundam-container">
                    <img src={WildSurreal} className="gundam-fade" style={{width: "100%"}} alt="" />
                    <div className="creative-container">
                        <h2>Inspired design</h2>
                        <h2>incredible experiences...</h2>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="long-divider-down-container">
                <img src={LongDividerDown} alt="" />
            </div>
        </div>
    );
};

export default SectionFive;