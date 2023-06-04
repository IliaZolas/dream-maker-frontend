import "./section-four.scss"
import "./section.scss"
import Tech from "../components/tech"
import LongDividerDown from "../assets/long-divider-down.png"
import NodeCloud from "../assets/node-cloud.png"
import Blurbs from "../components/blurbs-standard"
import NodeNet from "../assets/node-net.png"

const SectionFour = () => {
    return (
        <div className="section relative">
            <div className="center">
                <h1>We are always connected</h1>
                <p>We break the mold of digital communication, forging new paths with avant-garde strategies that captivate, inspire, and leave a lasting impression.</p>
            </div>
            <div>
                <img src={NodeCloud} className="section-image" alt="" />
            </div>
            <Blurbs
                className="z-1"
                title_1="Analytics"
                description_1="Successful apps need successful monitoring with a network of apps that collaborate to bring you true and useful information."
                title_2="Marketing"
                description_2="Web apps without a voice are never discovered. With our loud tactics, we give your site the boost it needs to be seen over the web."
                title_3="Content"
                description_3="We use humans and AI to generate jaw dropping pieces of content designed to stop your users in awe."
                title_4="Events"
                description_4="Real time engagement is the only way to engage your audience and highly useful during events. Consider us your secret service."
            />
            <div className="tech-container z-1">
                <div className="flex flex-wrap tech-list-container">
                    <Tech 
                        title="Analytics Tools"
                    />
                    <Tech 
                        title="Chat Bots"
                    />
                    <Tech 
                        title="Media Buying"
                    />
                    <Tech 
                        title="Cloud Storage"
                    />
                    <Tech 
                        title="Streaming Platforms"
                    />
                    <Tech 
                        title="War Rooms"
                    />
                    <Tech 
                        title="Communication Strategies"
                    />
                    <Tech 
                        title="Distribution Channels"
                    />
                    <Tech 
                        title="Content"
                    />
                </div>
            </div>
            <div>
                <img src={LongDividerDown} alt="" />
            </div>
            <div className="node-net">
                <img src={NodeNet} alt="" style={{width: "100%"}}/>
            </div>
        </div>
    );
};

export default SectionFour;