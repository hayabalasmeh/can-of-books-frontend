import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login';
import MyFavoriteBooks from './myFavoriteBooks';
import Profile from './profile';
import { withAuth0 } from '@auth0/auth0-react'; //value will be an object , no matter we use withAuth0 or useAuth0


class App extends React.Component {

  render() { //in order to retrieve the property and methods there are 2 ways if we use the class then this.props.auth0
    // if a hook then const elias name= eliasname of the imported obj().elias name


    console.log('app', this.props) //app is an object which has auth0 as a property which holds the value of an object
    const {isAuthenticated } = this.props.auth0; // the const name is elias but the name placed after the auth0 is a property name which has the isAuthenticated key reserved
    // const isAuthentication = this.props.auth0.isAuth
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
              <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  {isAuthenticated ?
                  <MyFavoriteBooks/> : <Login/>
                  }
                </Route >
                <Route exact path="/profile">
                  <Profile/>
                     {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                  </Route>
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
