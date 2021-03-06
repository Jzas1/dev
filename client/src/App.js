import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Fragment, useEffect } from 'react';
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import './App.css';
import { loadUser } from './actions/auth'
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/profiles'
import Profile from './components/profile/Profile'
import Posts from './components/posts/Posts'
import Post from './components/posts/Post'



if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/profiles' component={Profiles} />
              <Route path='/profile/:id' component={Profile} />

              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRoute
                path='/posts'
                component={Posts}
              />
              <PrivateRoute
                path='/post/:id'
                component={Post}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
