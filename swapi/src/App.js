import Landing from './components/landing/index.js'
import logo from './components/images/star-wars-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} alt="star wars logo" />
        <Landing />
      </main>
    </div>
  );
}

export default App;
