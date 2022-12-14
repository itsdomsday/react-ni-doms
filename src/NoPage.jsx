import { Link } from "react-router-dom";

function NoPage() {
    return (
        <div>
            <h1>Error 404: Page not found</h1>
            <p><Link to="/">Home →</Link></p>
            <p><Link to="/about">About →</Link></p>
            <p><Link to="/contact">Contact →</Link></p>
            <p><Link to="/donate">Donate →</Link></p>
        </div>
    );
}

export default NoPage;