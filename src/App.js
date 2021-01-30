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
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from "./components/UpdateProfile"
//import CourseCard from "./components/CourseCard";
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/updateprofile" component={UpdateProfile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/course/:courseId" component={CoursePage} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
