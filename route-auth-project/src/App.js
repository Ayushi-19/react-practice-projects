import {Route, Switch, Redirect} from 'react-router-dom';
import { useContext } from 'react';

import Authentication from './store/auth-context';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Countries from './pages/Countries';

function App() {
  const ctx = useContext(Authentication);
  console.log("Context data ",ctx)
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
        <Route path="/" exact>
            <Redirect to="/countries"/>
          </Route>
          <Route path="/countries">
            <Countries/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          { ctx.auth && <Route path="/welcome">
            <Welcome/>
          </Route>}
          { ctx.auth && <Route exact path="/products">
            <Products/>
          </Route>}
          { ctx.auth && <Route path="/products/:productId">
            <ProductDetails/>
          </Route>}
          <Route path="*">
            <Redirect to="/home"/>
          </Route>
        </Switch>  
      </main>
      
    </div>
  );
}

export default App;
