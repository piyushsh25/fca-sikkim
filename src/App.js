import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';
import { ContactPage } from './Pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact-us' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
