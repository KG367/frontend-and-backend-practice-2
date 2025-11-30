import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function TechnologyApi() {
    const [technologies, setTechnologies] = useState([]);

    const fetchTech = async () => {
        try {
            for (let i = 0; i < 10; i++) { // Даём 10 попыток
                const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells/random');
                var a = await res.json();
                if (!technologies.some((el) => {
                    el.index === a.index
                })) {
                    return a;
                }
            }
            return null;
        } catch (err) {
            console.error('Ошибка загрузки:', err);
            return null;
        }
    }

    const getLocal = () => {
        let localtechs = localStorage.getItem("technologies");
        if (localtechs) {
            try {
                localtechs = JSON.parse(localtechs)
            } catch {
                localtechs = null;
            }
            if (localtechs !== null) {
                console.log("Беру локальную штуку")
                setTechnologies(localtechs);
                return;
            }
        }
    }

    useEffect(() => {
        getLocal();
    }, []);

    useEffect(() => {
        localStorage.setItem("technologies", JSON.stringify(technologies));
    }, [technologies]);

    const addNew = (newTech) => {
        const ind = Math.max(technologies.map(o => o.id))
        setTechnologies([
            ...technologies,
            { ...newTech, id: ind + 1 }
        ])
    }

    const changeStatus = (ind, newStat) => {
        setTechnologies(technologies.map((tech) => 
            tech.id==ind?{...tech, status: newStat}:tech
        ))
    }

    const TechnologyList = () => {
        return (
            <div className="page">
                <div className="page-header">
                    <h1>Все технологии</h1>
                    <Link to="/add-technology" className="btn btn-primary">
                        + Добавить технологию
                    </Link>
                </div>
                <div className="technologies-grid">
                    {technologies.map(tech => (
                        <div key={tech.id} className="technology-item">
                            <h3>{tech.title}</h3>
                            <p>{tech.description}</p>
                            <div className="technology-meta">
                                <span className={`status status-${tech.status}`}>
                                    {tech.status}
                                </span>
                                <Link to={`/technology/${tech.id}`} className="btn-link">
                                    Подробнее →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {technologies.length === 0 && (
                    <div className="empty-state">
                        <p>Технологий пока нет.</p>
                        <Link to="/add-technology" className="btn btn-primary">
                            Добавить первую технологию
                        </Link>
                    </div>
                )}
            </div>
        );
    }

    return {
        technologies,
        fetchTech,
        addNew,
        TechnologyList,
        changeStatus
    }
}
export default TechnologyApi;