import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";

function Home() {
  return (
    <div>Home</div>
  )
}

function About() {
  return (
    <div>About</div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="navlink">Home</Link>
        <Link to="/about" className="navlink">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={
          <Alert variant={'danger'}>There's nothing here!</Alert>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
