import "./grid.scss"

const GridCard = ({number, title, description, image}) => {
    return(
        <div>
            <div className="grid-content-container">
                <div className="grid-image">
                    <img src={image} alt="" />
                </div>
                <div className="grid-number">
                    <p>{number}</p>
                </div>
            </div>
            <div className="grid-text-container">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default GridCard;