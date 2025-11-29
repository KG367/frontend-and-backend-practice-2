import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import TechnologyList from './pages/TechnologyList.jsx';
import TechnologyDetail from './pages/TechnologyDetail.jsx';
import Stats from './pages/Stats.jsx';
import Settings from './pages/Settings.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        {/* Основное содержимое */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technologies" element={<TechnologyList />} />
            <Route path="/technology/:techId" element={<TechnologyDetail />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;