import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Header from "../Header";
import Admin from "../Admin";
import Doctor from "../Doctor";
import Patients from "../Patients";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import { useEffect } from "react";
import { init } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/patient">
            <Header />
            <Patients />
          </Route>
          <Route exact path="/doctor">
            <Header />
            <Doctor />
          </Route>
          <Route exact path="/admin">
            <Header />
            <Admin />
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
