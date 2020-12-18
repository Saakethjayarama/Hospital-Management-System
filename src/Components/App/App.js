import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
