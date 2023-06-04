import "../sections/section.scss"
import DivUp from "../assets/divider-up.png"
import DivDown from "../assets/divider-down.png"

const Blurbs = ({title_1, description_1, title_2, description_2, title_3, description_3, title_4, description_4}) => {
    return (
        <div className="section-blurbs flex space-around align-center">
                <div className="section-blurb">
                    <h3>{title_1}</h3>
                    <p>{description_1}</p>
                </div>
                <div>
                    <img src={DivUp} alt="" />
                </div>
                <div className="section-blurb">
                    <h3>{title_2}</h3>
                    <p>{description_2}</p>
                </div>
                <div>
                    <img src={DivDown} alt="" />
                </div>
                <div className="section-blurb">
                    <h3>{title_3}</h3>
                    <p>{description_3}</p>
                </div>
                <div>
                    <img src={DivUp} alt="" />
                </div>
                <div className="section-blurb">
                    <h3>{title_4}</h3>
                    <p>{description_4}</p>
                </div>
            </div>
    );
};

export default Blurbs;