import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import AccountPage from "./Pages/Account";
import TransfertPage from "./Pages/Transfert";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/Account" component={AccountPage} />
      <Route exact path="/Transfert" component={TransfertPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
