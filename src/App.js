import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
