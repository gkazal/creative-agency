import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import Login from './Components/Login/Login/Login';
import OrderForm from './Components/Order/OrderForm/OrderForm';
import OrderPage from './Components/Order/OrderPage/OrderPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/ServiceList/ServiceList/ServiceList';
import CustomerReview from './Components/CustomerReview/CustomerReview/CustomerReview';
import ServiceListBody from './Components/ServiceList/ServiceList/ServiceListBody/ServiceListBody';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [image, setImage] = useState('')


  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser,  image, setImage  }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/order/:name">
            <OrderPage></OrderPage>
          </ PrivateRoute>


          <PrivateRoute path="/service">
            <ServiceListBody></ServiceListBody>
          </PrivateRoute>

          <Route path="/review">
            <CustomerReview></CustomerReview>
          </Route>




        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
