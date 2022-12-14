import { Link } from "react-router-dom";

function Donate() {
    return (
        <div>
            <h1>Donate</h1>
            <p>Please donate for my future expenses. Hehe</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="PHP 0.00" aria-label="PHP 0.00" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2">Send</span>
            </div>
            <p><Link to="/">Home →</Link></p>
            <p><Link to="/about">About →</Link></p>
            <p><Link to="/contact">Contact →</Link></p>
        </div>
    );
}

export default Donate;