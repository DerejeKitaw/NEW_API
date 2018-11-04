import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';

import './styles/styles.css';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
import { addInverter } from './store/actions/inverterActions';
import getVisibleInverters from './store/selectors/inverters';
// Components
import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Projects from './components/project/Projects';
import NotFound from './components/common/not-found/NotFound';
import Dashboard from './components/dashboard/Dashboard';
import Inverters from './components/inverters/Inverters';
import EditInverterPage from './components/inverters/EditInverterPage';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}
// const state = store.getState();
// console.log(state.inverters);
// const visibleInverters = getVisibleInverters(state.inverters, state.filters);
// console.log(visibleInverters);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/not-found" component={NotFound} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/inverters" component={Inverters} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/inverter/edit/:id" component={EditInverterPage} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
