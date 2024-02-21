import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from  "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {  signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, 
         LogoContainer,
         NavLinksContainer,
         NavLink
        } from "./navigation-bar.styles";

const NavigationBar = () => {

    const { currentUser }  = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/home'>
                    <CrownLogo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>SHOP</NavLink>
                    <NavLink to='/shop'>CONTACT</NavLink>
                    {
                       currentUser ? (
                        <NavLink to='/auth' onClick={signOutUser}>SIGN OUT</NavLink>
                       ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                       )
                    }
                    <CartIcon />
                </NavLinksContainer>
                { isCartOpen && <CartDropDown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;