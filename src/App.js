import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Neebs from './pages/Neebs'
import Music from './pages/Music'
import BeeHive from './pages/BeeHive'
import Skate from './pages/Skate'
import Home from './pages/Home'
import './scss/main.scss'

function App() {
  return (
    <Router>
      <Navbar/>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/neebs-gaming" element={<Neebs />}></Route>
        <Route path="/the-music-shop" element={<Music />}></Route>
        <Route path="/the-beehive" element={<BeeHive />}></Route>
        <Route path="/the-skate-shop" element={<Skate/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;


