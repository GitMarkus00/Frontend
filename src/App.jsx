
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Todolist from './components/TodoList';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App( ) {
  return ( 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <>
      <nav className="nav">
        <h1>React router</h1>
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/todolist">Todolist</Link>
          </li>

        </ul>
      </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/todolist" element={<Todolist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
    </LocalizationProvider>
  );
}

export default App;
