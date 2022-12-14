import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <p>This my wonderful, clean, and empty home page to test my first-ever React web app. Click one of the links below to visit other pages.</p>
            <p><Link to="/about">About →</Link></p>
            <p><Link to="/contact">Contact →</Link></p>
            <p><Link to="/donate">Donate →</Link></p>
        </div>
    );
}

export default Home;