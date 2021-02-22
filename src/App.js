import logo from "./austin.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://main.dipbmsxn0sc0v.amplifyapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>This is the 'Near Me' App!</p>
        </a>
      </header>
    </div>
  );
}

export default App;
