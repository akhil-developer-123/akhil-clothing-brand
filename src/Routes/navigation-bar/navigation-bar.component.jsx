import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation-bar.styles.scss";
import { ReactComponent as CrownLogo } from  "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {  signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const NavigationBar = () => {

    const { currentUser }  = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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
                        <Link className="nav-link" to='/auth' onClick={signOutUser}>SIGN OUT</Link>
                       ) : (
                        <Link className="nav-link" to='/auth'>SIGN IN</Link>
                       )
                    }
                    <CartIcon />
                </div>
                { isCartOpen && <CartDropDown /> }
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;