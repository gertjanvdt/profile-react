import './styles/App.css';
import Header from './Header.js'
import About from './About';
import Contact from './Contact';
import Tech from './Tech';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
