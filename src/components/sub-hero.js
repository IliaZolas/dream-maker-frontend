import "./hero.scss"
import Extroadinary from "../assets/extroadinary.png"
import Immersive from "../assets/immersive.png"
import Avant from "../assets/avant-garde.png"
import Inspired from "../assets/inspired-design.png"
import DivUp from "../assets/divider-up.png"
import DivDown from "../assets/divider-down.png"

const SubHero = () => {
    return (
        <div>
            <div className="sub-hero-container">
                <div className="sub-hero-blurb">
                    <div className="sub-hero-image-container">
                        <img src={Extroadinary} className="sub-hero-blurb-image" alt="" style={{ width: "75px"}}/>
                    </div>
                    <div className="sub-hero-blurb-text">
                        <h2>Extraordinary App Development</h2>
                        <p>Advocates of all technologies that enable us to push the boundaries of conventional web development and interactive experiences.</p>
                    </div>
                </div>
                <div className="sub-hero-blurb-divider">
                    <img src={DivUp} alt="" />
                </div>
                <div className="sub-hero-blurb">
                    <div className="sub-hero-image-container">
                        <img src={Immersive} className="sub-hero-blurb-image"  alt="" style={{ width: "75px"}}/>
                    </div>
                    <div className="sub-hero-blurb-text">
                        <h2>Immersive Digital Experiences</h2>
                        <p>We aim for captivating and engaging user experiences that goes beyond traditional interfaces, making users feel fully immersed.</p>
                    </div>
                </div>
                <div className="sub-hero-blurb-divider">
                    <img src={DivDown} alt="" />
                </div>
                <div className="sub-hero-blurb">
                    <div className="sub-hero-image-container">
                        <img src={Avant} alt="" className="sub-hero-blurb-image"  style={{ width: "75px"}}/>
                    </div>
                    <div className="sub-hero-blurb-text">
                        <h2>Avant-Garde Communication</h2>
                        <p>We draw inspiration from visionary cases studies that demonstrate innovative and boundary-pushing web communication strategies.</p>
                    </div>
                </div>
                <div className="sub-hero-blurb-divider">
                    <img src={DivUp} alt="" />
                </div>
                <div className="sub-hero-blurb">
                    <div className="sub-hero-image-container">
                        <img src={Inspired} alt="" className="sub-hero-blurb-image"  style={{ width: "75px"}}/>
                    </div>
                    <div className="sub-hero-blurb-text">
                        <h2>Inspired Design</h2>
                        <p>We craft compelling narratives, stunning visuals and engaging experiences that resonate with your audience and leave a lasting impression.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHero;