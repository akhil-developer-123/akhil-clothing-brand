import './App.scss';
import Home from './Routes/home/home.component';
import Shop from './Routes/shop/shop.component';
import NavigationBar from './Routes/navigation-bar/navigation-bar.component';

import { Routes, Route, Link } from 'react-router-dom';
import Authentication from './Routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;