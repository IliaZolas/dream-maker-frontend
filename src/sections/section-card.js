import "./section-card.scss"
import Card from "../components/card";
import Atom from "../assets/Atom.png"
import Track from "../components/track";

const SectionCard = () => {
    return (
        <div className="flex card-container space-around">
            <div>
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}
                    />
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}
                    />
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}
                    />
            </div>
            <div>
                <Track />
            </div>
            <div>
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}
                    />
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}
                    />
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}
                    />
            </div>
        </div>
    );
};

export default SectionCard;