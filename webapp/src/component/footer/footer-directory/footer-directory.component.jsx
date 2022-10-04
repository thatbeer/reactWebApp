import 'bootstrap/dist/css/bootstrap.min.css';
import {DiAndroid} from "react-icons/di"

const FooterDirectory = () => { 
    return (
        <div className="footer-directory">
            <div className='container'>
                <div className="row">
                    <div className='col'>
                        <h4>Component</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate proram</a></li>
                            </ul>
                    </div>
                    <div className='col'>
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Payment Options</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Online shopping</h4>
                        <ul>
                            <li><a href="#">Digital services</a></li>
                            <li><a href="#">Hologram</a></li>
                            <li><a href="#">Coins</a></li>
                            <li><a href="#">Stocks</a></li>
                            <li><a href="#">Intern program</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>for more</h4>
                        <ul>
                            <li><a href="#">Digital services</a></li>
                            <DiAndroid size={40} />
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default FooterDirectory;