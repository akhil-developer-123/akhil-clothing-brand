import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation-bar.styles.scss";
import { ReactComponent as CrownLogo } from  "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {  signOutUser } from "../../utils/firebase/firebase.utils";

const NavigationBar = () => {

    const { currentUser, setCurrentUser }  = useContext(UserContext);
    console.log("user ", currentUser);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navbar">
                <Link className="logo-container" to='/home'>
                    <CrownLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/shop'>CONTACT</Link>
                    {
                       currentUser ? (
                        <Link className="nav-link" to='/auth' onClick={signOutHandler}>SIGN OUT</Link>
                       ) : (
                        <Link className="nav-link" to='/auth'>SIGN IN</Link>
                       )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;