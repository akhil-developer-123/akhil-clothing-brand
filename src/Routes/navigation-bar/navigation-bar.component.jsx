import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation-bar.styles.scss";
import { ReactComponent as CrownLogo } from  "../../assets/crown.svg";

const NavigationBar = () => {
    return (
        <Fragment>
            <div className="navbar">
                <Link className="logo-container" to='/home'>
                    <CrownLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/shop'>CONTACT</Link>
                    <Link className="nav-link" to='/auth'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;