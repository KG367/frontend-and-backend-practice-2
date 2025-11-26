import './App.css'
import TechnologyCard from './components/TechnologyCard.jsx'
import ProgressHeader from './components/ProgressHeader.jsx';
import { QuickActions, Filters } from './components/QuickActions.jsx';
import { useState } from 'react';

function App() {
  const [technologies, setTechnologies] = useState([
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
  ]);

  const changeStat = (id) => {
    setTechnologies((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: nextStat(t.status) } : t
      )
    );
  }

  const markAll = () => {
    setTechnologies((prev) =>
      prev.map((t) =>
        ({ ...t, status: "completed" })
      )
    );
  }

  const resetAll = () => {
    setTechnologies((prev) =>
      prev.map((t) =>
        ({ ...t, status: "not-started" })
      )
    );
  }

  const randomSelect = () => {
    setTechnologies((prev) => {
      const rIx = Math.floor(Math.random() * prev.length);
      return prev.map((t, i) =>
        i === rIx ? { ...t, status: nextStat(t.status) } : t
      )
    });
  }

  const nextStat = (stat) => {
    switch (stat) {
      case "completed":
        return "not-started";
      case "in-progress":
        return "completed";
      case "not-started":
        return "in-progress";
      default:
        return "not-started";
    }
  }

  const [filter, setFilter] = useState("all");

  return (
    <div>
      <ProgressHeader techs={technologies} />
      <div className="technologies">
        {technologies.filter((i) => { // фильтрация
          if (filter==="all")
            return true;
          return i.status === filter;
        }).map(i => // отображение отфильтрованного, по умолчанию всех
          <TechnologyCard key={i.id} technology={i} chSt={changeStat} />
        )}
      </div>
      <QuickActions completeAll={markAll} resetAll={resetAll} random={randomSelect} />
      <Filters setFilter={setFilter}></Filters>
    </div>
  )
}

export default App;