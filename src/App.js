import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FetchApi />
      </header>
    </div>
  );
}

export default App;
