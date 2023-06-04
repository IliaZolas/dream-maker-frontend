import "./section-six.scss"
import Logo from "../assets/logo.png"
import { useState } from "react"
import LongDividerDown from "../assets/long-divider-down.png"

const SectionSixForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        // ....
    }


    return (
        <div>
            <div className="form-intro">
                <div className="form-intro-text">
                    <h2>Engage Dream Maker Corp?</h2>
                    <p>You’ll be contacted shortly. Make sure to have your questions ready and your thoughts in order cause this is serious business.</p>
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="hidden">Name:</label>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="NAME"
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="hidden">Email:</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="EMAIL"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" className="submit-button">SUBMIT</button>
                </form>
            </div>
            <div className="long-divider-down">
                <img src={LongDividerDown} alt="" />
            </div>
        </div>
    )
}

export default SectionSixForm;