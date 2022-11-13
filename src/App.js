import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Cards from './components/Cards';
import Design from './components/Design';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newslater from './components/Newslater';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Design" element={<Design/>} />
            <Route path="/Newslater" element={<Newslater/>} />
            <Route path="/Cards" element={<Cards/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
