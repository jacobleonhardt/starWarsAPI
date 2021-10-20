import Landing from './components/landing/index.js'
import logo from './components/images/star-wars-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header><img src={logo} /></header>
      <main className="App-header">
        <Landing />
      </main>
    </div>
  );
}

export default App;
