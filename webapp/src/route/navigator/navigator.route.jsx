import { Link  } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import './navigator.styles.scss'

import { HiHome } from "react-icons/hi"

const Navigator = () => {
    return (
        <Fragment>
            <div className="navigator">
                <Link className="logo-container" to={'/'}>
                    <HiHome size={60} className="logo"/>
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to={"/posts"}>
                        Posters
                    </Link>
                    <Link className="nav-link" to={'/sign-in'} >
                        signin
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigator;