import logo from "./austin.gif";
import "./App.css";

const app_name = "This is my 'Near Me' App!";

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
          <p>{app_name}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
