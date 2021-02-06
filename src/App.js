import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RouteWrapper from "./components/RouteWrapper";
import NotFound from "./components/NotFound";
import routes from "./routes";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {routes.map((route, index) => (
              <RouteWrapper key={index} {...route} />
            ))}
            <Route component={NotFound} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
