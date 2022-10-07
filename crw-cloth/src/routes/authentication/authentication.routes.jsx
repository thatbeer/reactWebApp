

import SignInForm from '../../component/signin/signin.component';
import SignUpForm from '../../component/signup/signup.component';
import './authentication.styles.scss'

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};
export default Authentication;