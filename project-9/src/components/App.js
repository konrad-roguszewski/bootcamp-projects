import Dashboard from './google-drive/Dashboard'

import Profile from './authentication/Profile'
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'

import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <AuthProvider>
            {/* Drive */}
            <PrivateRoute exact path="/" component={Dashboard} />

            {/* Profile */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            {/* Auth */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </AuthProvider>
        </Switch>
      </Router>
  )
}

export default App
