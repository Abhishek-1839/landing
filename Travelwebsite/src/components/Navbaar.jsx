// import "./Navbaar.css";
import img1  from "../images/Picture1.png";
const Navbaar = () => {
    return (
        <>
        <nav>
            <div className="lefty">
                <img src={img1} className="img" />
                <h1 className="header">BANJAARA TRAVELS</h1>
            </div>
            <div className="righty">
                
                    <ul>
                        <li>
                            <a href="#">Home</a></li>
                        <li> <a href="#">Blogs</a></li>
                        <li> <a href="#">Contact</a></li>
                        <li> <a href="#">Services</a></li>
                    </ul>

                

            </div>
            </nav>
        </>
    )

}
export default Navbaar;