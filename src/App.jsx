import './App.css'
import TechnologyCard from './components/TechnologyCard.jsx'
import useTechnologies from './components/useTechnologies';
import ProgressBar from './components/ProgressBar.jsx';
import QuickActions from './components/QuickActions.jsx';

function App() {
  const { technologies, updateStatus, updateNotes, progress, markAll, resetAll } = useTechnologies();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Трекер изучения технологий</h1>
        <ProgressBar
          progress={progress}
          label="Общий прогресс: "
          color="#4CAF50"
          animated={true}
          height={20}
        />
      </header>
      <main className="app-main">
        <div className="technologies-grid">
          {technologies.map(tech => (
            <TechnologyCard
              key={tech.id}
              technology={tech}
              onStatusChange={updateStatus}
              onNotesChange={updateNotes}
            />
          ))}
        </div>
        <QuickActions onMarkAllCompleted={markAll} onResetAll={resetAll} technologies={technologies} />
      </main>
    </div>
  )
}

export default App;