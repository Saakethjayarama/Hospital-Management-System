import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";
import Admin from "../Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin">
            <Header />
            <Admin />
          </Route>
          <Route exact path="/login">
            <Header />
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
