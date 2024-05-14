// import "./Footer.css";

const Foot = () => {
    return (
        <div className="last">
            <div className="part1">
                <h1 className="fottext"><a href="#">Banjaara travels</a></h1>
                <h4 className="fottexta">Discover the world's wonders, from hidden gems to iconic landmarks, and let us be your guide to unforgettable adventures and extraordinary escapes.</h4>
                <ul className="listi">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            <div className="part2">
                <p>Copyright &copy; All Rights reserved..</p>
            </div>
            <div className="part3">
                <h3>Subscribe To our Newsletter</h3>
                <h5>For future offers and updates.....</h5>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Enter Your Email Address" />
                    <button className="search-button">SUBSCRIBE</button></div>
                <p className="adres">Address : Indore, Madhya Pradesh India, PinCode - {Math.floor(Math.random() * 1000000)}</p>
            </div>
        </div>
    );
}

export default Foot;