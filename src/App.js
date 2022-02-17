import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Project from './pages/Project'
import Home from './pages/Home'
import Footer from './components/Footer'
import './scss/main.scss'

function App() {
  return (
    <Router>
      <Navbar/>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/neebs-gaming" element={<Project />}></Route>
        {/* <Route path="/the-music-shop" element={}></Route>
        <Route path="/the-beehive" element={}></Route>
        <Route path="/the-skateshop" element={}></Route> */}
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;


