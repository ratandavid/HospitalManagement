import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Container from "./container/container";
import Login from "./authentication/loginpage/login";
import Register from './authentication/registerPage/register';



function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route path ="/home" > 
              <Container/>
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
