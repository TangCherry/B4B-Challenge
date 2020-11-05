import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Header from "./components/header/Header";
import Modal from './components/modal/Modal';
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
