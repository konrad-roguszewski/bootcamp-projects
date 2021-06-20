import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: '100vh' }}
    >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <Switch>
              <AuthProvider>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </AuthProvider>
            </Switch>
          </Router>
        </div>
      </Container>
  )
}

export default App
