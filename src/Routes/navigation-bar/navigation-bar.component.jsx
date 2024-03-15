import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from  "../../assets/crown.svg";
import {  signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux"; 

import { NavigationContainer, 
         LogoContainer,
         NavLinksContainer,
         NavLink
        } from "./navigation-bar.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const NavigationBar = () => {
    // whenever redux state object changes useSelector will re-run and hence 
    // this component re-renders.
    const currentUser = useSelector(selectCurrentUser);
    // const { currentUser } = useContext(UserContext);
    const isCartOpen  = useSelector(selectIsCartOpen);

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