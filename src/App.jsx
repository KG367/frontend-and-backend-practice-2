import './App.css'
import TechnologyCard from './components/TechnologyCard.jsx'
import ProgressHeader from './components/ProgressHeader.jsx';
import { QuickActions, Filters, Search } from './components/QuickActions.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [technologies, setTechnologies] = useState([
    {
      id: 1,
      title: 'React Components',
      description: 'Изучение базовых компонентов',
      status: 'completed',
      notes: ''
    },
    {
      id: 2,
      title: 'JSX Syntax',
      description: 'Освоение синтаксиса JSX',
      status: 'in-progress',
      notes: ''
    },
    {
      id: 3,
      title: 'State Management',
      description: 'Работа с состоянием компонентов',
      status: 'not-started',
      notes: ''
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

  useEffect(() => {
    localStorage.setItem('techTrackerData', JSON.stringify(technologies));
    console.log('Данные сохранены в localStorage');
  }, [technologies]);

  useEffect(() => {
    const saved = localStorage.getItem("techTrackerData");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTechnologies(JSON.parse(saved));
      console.log("Данные загружены из localStorage")
    }
  }, []);

  const updateTechnologyNotes = (techId, newNotes) => {
    console.log(techId, newNotes);
    setTechnologies(prevTech =>
      prevTech.map(tech =>
        tech.id === techId ? { ...tech, notes: newNotes } : tech
      )
    );
  };

  const [searchQuery, setSearchQuery] = useState('');

  const [filter, setFilter] = useState("all");

  return (
    <div>
      <ProgressHeader techs={technologies} />
      <Search query={searchQuery} setQuery={setSearchQuery} />
      <div className="technologies">
        {technologies.filter((i) => { // фильтрация по статусу
          if (filter === "all")
            return true;
          return i.status === filter;
        }).filter((tech) => // фильтрация по поиску
          tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tech.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(i => // отображение отфильтрованного, по умолчанию всех
          <TechnologyCard key={i.id} technology={i} chSt={changeStat} onUpdateNotes={updateTechnologyNotes} />
        )}
      </div>
      <QuickActions completeAll={markAll} resetAll={resetAll} random={randomSelect} />
      <Filters setFilter={setFilter}></Filters>
    </div>
  )
}

export default App;