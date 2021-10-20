import Landing from './components/landing/index.js'
import logo from './components/images/star-wars-logo.png'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/profile/index.js';
import './App.css';
import luke from './components/images/luke-skywalker-2.jpg'
import r2 from './components/images/r2d2.jpg'

function App() {
  return (
    <div className="App">
      <img id="logo" src={logo} alt="star wars logo" />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <main className="App-main">
              <Landing />
            </main>
          </Route>
          <Route path="/luke-skywalker" exact={true}>
            <Profile pic={luke} />
          </Route>
          <Route path="/r2d2" exact={true}>
            <Profile pic={r2} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
