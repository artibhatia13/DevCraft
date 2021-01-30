import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import CoursePage from "./components/CoursePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/course/:courseId" component={CoursePage} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
