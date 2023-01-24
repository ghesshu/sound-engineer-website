import './App.css';
import { Routes, Route, useNavigate, Switch } from 'react-router-dom';
// import { BrowserRouter} from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import Gallery from './routes/Gallery';
import Portfolio from './routes/Portfolio';
import About from './routes/About';
import Services from './routes/Services';
import Communication from './routes/Communication';


function App() {
  return (

    <Routes>
    <Route path='/' exact component={Home} element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='gallery' element={<Gallery/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/about' element={<About/>} />
    <Route path='services' element={<Services/>} />
    <Route path='communication' element={<Communication/>} />
    </Routes>

    

  );
}

export default App;
