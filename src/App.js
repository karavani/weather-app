import './App.css';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <header className="header">
        header!!
      </header>
      <main>
        <div className="menu">
          menu!!
        </div>
        <div className="mainContainer">
          <Main />
        </div>
      </main>
      <footer>
        footer!!
      </footer>
    </div>
  );
}

export default App;
