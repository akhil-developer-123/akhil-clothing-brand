import './App.scss';
import Home from './Routes/home/home.component';
import Shop from './Routes/shop/shop.component';
import NavigationBar from './Routes/navigation-bar/navigation-bar.component';
import Checkout from './Routes/checkout/checkout.component';

import { Routes, Route } from 'react-router-dom';
import Authentication from './Routes/authentication/authentication.component';
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "./store/user/user.action";
import { setCategories } from "./store/categories/categories.action";
import { fetchCategoriesAsync } from './store/categories/categories.action';

import { useEffect } from 'react'; 
import { createUserDocumentFromAuth, 
          getCategoriesAndDocumentsFromFirestore } 
        from "./utils/firebase/firebase.utils";

const App = () => {

  const dispatch = useDispatch();

  const handleAuth = async (user) => {
    if (user) {
        await createUserDocumentFromAuth(user);
    }
    const actionObject = setCurrentUser(user);
    dispatch(actionObject);
  }

  const getCategories = async () => {
    dispatch(fetchCategoriesAsync());
  }

// This runs only once on mounting the component
  useEffect(() => {
      const unsubscribe = onAuthStateChangedListener(handleAuth);
      getCategories();
      return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route path='home' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
