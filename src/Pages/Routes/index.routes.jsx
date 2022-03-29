import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../Home/index';
import ProductDetails from '../ProductDetails';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='/product-details/:id' element={<ProductDetails />} />
    </Switch>
  );
};

export default Routes;
