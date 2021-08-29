import logo from './logo.svg';
import Article from "./components/Article";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          日本一高い山は富士山ですが
        </p>
        <div>
          <Article
            title={'アイウエオ'}
            content={'かきくけっこさしすせっそ'}
          />
          <Article
            title={'アイウエオマン'}
            content={'かきくけっこさしすせっそ'}
          />
          <Article
            title={'アイウエオジェン'}
            content={'かきくけっこさしすせっそたちつてっと'}
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
