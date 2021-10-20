import Landing from './components/landing/index.js'
import logo from './components/images/star-wars-logo.png'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/profile/index.js';
import './App.css';

import luke from './components/images/luke-skywalker-2.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <main className="App-main">
              <img src={logo} alt="star wars logo" />
              <Landing />
            </main>
          </Route>
          <Route path="/luke-skywalker" exact={true}>
            <Profile pic={luke} />
          </Route>
        </Switch>
      </BrowserRouter>
      <footer>
        <p>Created for the sole purpose of testing, demos, and skill assessments.
          A huge thanks to <a href="https://swapi.dev/" target="_blank">swapi.dev</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
