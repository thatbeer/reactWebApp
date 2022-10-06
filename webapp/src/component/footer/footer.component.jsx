import './footer.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col } from 'react-bootstrap';
import FooterDirectory from './footer-directory/footer-directory.component';
import FooterNavigator from './footer-navigator/footer-naviator.component';

const Footerx = () => {
    return (
        <div className='FooterEx'>
            <div>
                <FooterNavigator />
            </div>
            <div>
                <FooterDirectory />
            </div>
        </div>
    )
};

export default Footerx;
