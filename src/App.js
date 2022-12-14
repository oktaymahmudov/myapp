// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bar from './Bar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Bar/>
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
    // <div>
      
    // </div>
  );
}

export default App;
