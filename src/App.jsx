import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import "./App.css"

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
