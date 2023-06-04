import "./section.scss"
import LongDividerDown from "../assets/long-divider-down.png"
import BuildVision from "../assets/build-vision.png"
import Tech from "../components/tech";

const SectionTwo = () => {
    return (
        <div className="section">
            <div className="center">
                <h1>We build with a vision</h1>
                <p>By using modern technologies for web app development, we design, develop and ship ready to impress with no questions asked.</p>
            </div>
            <div>
                <img src={BuildVision} className="section-image" alt="" />
            </div>
            <div className="tech-container">
                <h3 className="center">TECH STACK</h3>
                <div className="flex flex-wrap tech-list-container">
                    <Tech 
                        title="Three.js"
                    />
                    <Tech 
                        title="React"
                    />
                    <Tech 
                        title="Node.js"
                    />
                    <Tech 
                        title="Express"
                    />
                    <Tech 
                        title="MongoDB"
                    />
                    <Tech 
                        title="Heroku"
                    />
                    <Tech 
                        title="Railway.app"
                    />
                    <Tech 
                        title="Ruby on Rails"
                    />
                    <Tech 
                        title="Godaddy"
                    />
                    <Tech 
                        title="Angular"
                    />
                    <Tech 
                        title="Python"
                    />
                    <Tech 
                        title="Wordpress"
                    />
                    <Tech 
                        title="Vue"
                    />

                </div>
            </div>
            <div>
                <img src={LongDividerDown} alt="" />
            </div>
        </div>
    );
};

export default SectionTwo;