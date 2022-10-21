import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Footer from "./Components/Footer"
import Menu from "./Components/Menu"
import About from './Components/About';
import Contact from './Components/Contact';

// define router
// routes define different page in the web applications.
// 
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
