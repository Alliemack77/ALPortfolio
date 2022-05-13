import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Neebs from './pages/Neebs'
import Music from './pages/Music'
import BeeHive from './pages/BeeHive'
import Skate from './pages/Skate'
import Vortex from './pages/Vortex'
import TodoApp from './pages/TodoApp'
import Home from './pages/Home'
import './scss/main.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/neebs-gaming" element={<Neebs />}></Route>
        <Route path="/the-music-shop" element={<Music />}></Route>
        <Route path="/the-beehive" element={<BeeHive />}></Route>
        <Route path="/the-skate-shop" element={<Skate/>}></Route>
        <Route path="/the-vortex" element={<Vortex/>}></Route>
        <Route path="/your-daily-todos" element={<TodoApp/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;


