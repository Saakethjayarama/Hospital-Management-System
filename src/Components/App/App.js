import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Header from "../Header";
import Admin from "../Admin";
import Doctor from "../Doctor";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
