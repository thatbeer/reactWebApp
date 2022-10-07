import { Fragment , useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.contexts";

import {ReactComponent as CrwnLogo } from '../../asset/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/authentication">
                        Sign In
                    </Link>
                </div>
            </div>
        <Outlet/>
        </Fragment>
    );
};

export default Navigation;