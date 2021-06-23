import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MyFirstComponent from './components/MyFirstComponent';
import Movies from './components/Movies';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

function App() {

  function presentation (name) {
    return (
      <h2>Hello. I'm {name}.</h2>
    );
  }

  return (
    <div className="App">

      <Header></Header>
      <Slider></Slider>

      <div className="center">

        <section id="content">

          <img src={logo} className="App-logo" alt="logo" />
          {presentation('René González')}  

          <section className="components">
            <MyFirstComponent></MyFirstComponent>
            <Movies></Movies>
          </section>

        </section>

        <Sidebar></Sidebar>

      </div>

    </div>
  );
}

export default App;
