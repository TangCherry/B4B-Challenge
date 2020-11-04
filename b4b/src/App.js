import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
