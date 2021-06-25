import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Router from './Router';

function App() {

  return (
    <div className="App">

      <Header></Header>
      <Slider title="This is a React example"></Slider>

      <div className="center">

        <section id="content">

          <section className="components">
            <Router></Router>
          </section>

        </section>

        <Sidebar></Sidebar>

        <div className="clearfix"></div>

      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
