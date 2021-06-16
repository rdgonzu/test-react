import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {

  function presentation (name) {
    return (
      <h2>Hello. I'm {name}.</h2>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {presentation('René González')}
      </header>
    </div>
  );
}

export default App;
