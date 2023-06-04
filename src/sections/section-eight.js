import "./section.scss";
import "./section-eight.scss";
import RedLady from "../assets/red-lady.png";
import Divider from "../assets/divider.png";
import TextLogo from "../assets/dreammakercorp-logo-large.png"

const SectionEight = () => {
    return (
    <div className="">
        <div className=""> 
            <div className="red-lady-container">
                <img src={RedLady} style={{width: "100%"}} alt="" />
                <div className="ending-container">
                    <div>
                        <h2 style={{color: "white"}}>The first of its kind</h2>
                    </div>
                    <div>
                        <img src={Divider} alt="" />
                    </div>
                    <div>
                        <img src={TextLogo} alt="" />
                    </div>
                </div>
                <div>
                    <a href="/#" className="button-cta" >MAKE YOUR DREAMS COME TRUE</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SectionEight;