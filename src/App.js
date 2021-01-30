import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "materialize-css/dist/css/materialize.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
