import './App.css'
import TechnologyCard from './components/TechnologyCard.jsx'
import ProgressHeader from './components/ProgressHeader.jsx';

function App() {
  const technologies = [
    {
      id: 1, title: 'React Components', description: 'Изучение базовых компонентов',
      status: 'completed'
    },
    {
      id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status:
        'in-progress'
    },
    {
      id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started'
    }
  ];

  return (
    <div>
      <ProgressHeader techs={technologies} />
      <div className="technologies">
        {technologies.map(i =>
          <TechnologyCard key={i.id} title={i.title} description={i.description} status={i.status} />
        )}
      </div>
    </div>
  )
}

export default App;