import { Link } from "react-router-dom";

function Contact(){
    return (
        <div>
            <h1>Contact</h1>
            <p>This is my contact page. Email me at <strong>dgvcristobal@gmail.com</strong> for more info.</p>
            <p><Link to="/">Home →</Link></p>
            <p><Link to="/about">About →</Link></p>
            <p><Link to="/donate">Donate →</Link></p>
        </div>
    );
}

export default Contact;