import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Button from '@material-ui/core/Button';
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Button variant="contained" color="primary">
                Primary
              </Button>
            </Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>  
        </div>  
      </AuthProvider>
    </Router>
  );
}

export default App;
