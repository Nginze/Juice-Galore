import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Hero from './components/Hero';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Statement from './pages/Statement';
import Meet from './pages/Meet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/statement' element={<Statement/>}/>
            <Route path='/team' element={<Meet/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
