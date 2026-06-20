import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </Router>
    </BrowserRouter>
  
  )
}

export default App
