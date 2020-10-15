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
import ShowServiceList from './Components/ShowAdminServiceList/ShowServiceList/ShowServiceList';
import AddService from './Components/ShowAdminServiceList/AddService/AddService';
import MakeAdmin from './Components/ShowAdminServiceList/MakeAdmin/MakeAdmin';

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

          <Route path="/showServiceList">
            <ShowServiceList></ShowServiceList>
          </Route>

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Route path="/addAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>

          




        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
