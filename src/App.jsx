import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Nav from './pages/nav/nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/nav" element={<Nav />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
