import "./slider.scss"
import StockProject from "../assets/stock-project.png"

const Slider = () => {
    return (
        <div className="slider-container">
            <div>
                <img src={StockProject} style={{width: "100%"}} alt="" />
            </div>
            <div className="overlay">
                <div className="overlay-text">
                    <h3>Client and Client</h3>
                    <p>An analytics platform built to inspire and revitalize minds</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;