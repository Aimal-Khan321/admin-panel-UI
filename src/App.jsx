import React from 'react'
import './App.css'
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
    <div className="App">
     <TopBar/>
     <div className="container">
      <SideBar />
      <Switch>
        <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/users">
      <UserList/>
      </Route>
      <Route path="/user/:userId">
      <User/>
      </Route>
      <Route path="/newUser">
      <NewUser/>
      </Route>
      <Route path="/products">
      <ProductList/>
      </Route>
      <Route path="/product/:productId">
      <Product/>
      </Route>
      <Route path="/newProduct">
      <NewProduct/>
      </Route>
      </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
