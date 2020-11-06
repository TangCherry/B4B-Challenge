import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
