import { Link } from "react-router-dom";

function About(){
    return (
        <div>
            <h1>About</h1>
            <p>My name is Dominic, and I'm a growing Full-Stack Web Developer, and our instructor calls us trash.</p>
            <p><Link to="/">Home →</Link></p>
            <p><Link to="/contact">Contact →</Link></p>
            <p><Link to="/donate">Donate →</Link></p>
        </div>
    );
}

export default About;