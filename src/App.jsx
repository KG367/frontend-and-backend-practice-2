import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import TechnologyApi from './pages/TechnologyApi.jsx';
import TechnologyDetail from './pages/TechnologyDetail.jsx';
import Stats from './pages/Stats.jsx';
import Settings from './pages/Settings.jsx';
import AddTechnology from './pages/AddTechnology.jsx';
import './App.css';
import SpellApi from './pages/Spell.jsx';

function App() {
  const { Spell } = SpellApi();
  const { technologies, addNew, fetchTech, TechnologyList, changeStatus } = TechnologyApi();
  return (
    <Router>
      <div className="app">
        <Navigation />
        {/* Основное содержимое */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technologies" element={<TechnologyList />} />
            <Route path="/technology/:techId" element={<TechnologyDetail technologies={technologies} changeStatus={changeStatus} />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/spell" element={<Spell />} />
            <Route path="/add-technology" element={<AddTechnology addNew={addNew} fetchTech={fetchTech} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;