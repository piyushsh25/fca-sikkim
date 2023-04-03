import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';
import { ContactPage } from './Pages/Contact';
import { Leadership } from './Pages/Leadership';
import { EventPage } from './Pages/EventPage';
import { Login } from './Pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
