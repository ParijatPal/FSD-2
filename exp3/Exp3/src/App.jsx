import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonBasic from './components/Button'
import TextField from './components/TextField'
import Select from './components/Select'
import Rating from './components/Rating'
import Checkbox from './components/Checkbox'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const theme = createTheme();

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div>
        <div>
          
        </div>
        

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="card">
          <h2>UI Components</h2>
          <ButtonBasic />
          <TextField />
          <Select />
          <Rating />
          <Checkbox />
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        
      </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
