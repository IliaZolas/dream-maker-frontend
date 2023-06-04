import "./grid.scss";
import GridCard from "./grid-card";
import p1 from "../assets/p2.png";
import p2 from "../assets/p1.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";


const Grid = () => {
    return (
        <div className="grid-container">
            <GridCard
                number="#1"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p1}
            />
            <GridCard
                number="#2"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p2}
            />
            <GridCard
                number="#3"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p3}
            />
            <GridCard
                number="#4"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p4}
            />
            <GridCard
                number="#5"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p5}
            />
            <GridCard
                number="#6"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p6}
            />
            <GridCard
                number="#7"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p7}
            />
            <GridCard
                number="#8"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p8}
            />
            <GridCard
                number="#9"
                title="Client & Client"
                description="An analytics platform built to inspire and revitalize minds"
                image={p9}
            />
        </div>
    )
}

export default Grid;