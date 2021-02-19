import './styles/App.css';
import Header from './Header.js'
import About from './About';
import Contact from './Contact';
import Tech from './Tech';
import Footer from './Footer';
import Portfolio from './Portfolio';


// Images import
import html from './img/html-5-black.svg'
import css from "./img/css-3-black.svg"
import js from "./img/javascript-2-black.svg"
import reactlogo from "./img/react-2-black.svg"
import bootstrap from "./img/bootstrap-4-black.svg"
import api from "./img/api-black.svg"
import php from "./img/php-black.svg"
import sql from "./img/mysql-black.svg"
import docker from "./img/docker-black.svg"
import References from './References';


function App() {
  const techs_black = [html, css, js, reactlogo, bootstrap, api, php, sql, docker ]  

  return (
    <div className="App">
      <Header />
      <Portfolio
        techs_black={techs_black}/>
      <About />
      <Tech
        techs={techs_black} />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
