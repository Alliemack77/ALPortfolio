// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
// import Project from './pages/Project'
import Home from './pages/Home'
import './scss/main.scss'

function App() {
  return (
    <>
      <Navbar/>
      <Home />
    </>

  );
}

export default App;


{/* <Router>
      <Navbar/>
      <Home />
      <Routes>
        <Route path="/neebs-gaming" element={<Project className="neebs"/>} />
        <Route path="/the-music-shop" element={<Project className="music"/>} />
      </Routes>
    </Router> */}