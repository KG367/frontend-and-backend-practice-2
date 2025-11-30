import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./TechnologyDetail.css";
function TechnologyDetail({ technologies, changeStatus }) {
    const { techId } = useParams();
    const [technology, setTechnology] = useState(null);
    useEffect(() => {
        const tech = technologies.find(t => t.id == parseInt(techId));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTechnology(tech);
    }, [technologies, techId]);
    if (!technology) {
        return (
            <div className="page">
                <h1>Технология не найдена</h1>
                <p>Технология с ID {techId} не существует.</p>
                <Link to="/technologies" className="btn">
                    ← Назад к списку
                </Link>
            </div>
        );
    }
    return (
        <div className="page">
            <div className="page-header">
                <Link to="/technologies" className="back-link">
                    ← Назад к списку
                </Link>
                <h1>{technology.title}</h1>
            </div>
            <div className="technology-detail">
                <div className="detail-section">
                    <h3>Описание</h3>
                    <p>{technology.description}</p>
                </div>
                <div className="detail-section">
                    <h3>Статус изучения</h3>
                    <div className="status-buttons">
                        <button
                            onClick={() => changeStatus(techId, 'not-started')}
                            className={technology.status === 'not-started' ? 'active' : ''}
                        >
                            Не начато
                        </button>
                        <button
                            onClick={() => changeStatus(techId, 'in-progress')}
                            className={technology.status === 'in-progress' ? 'active' : ''}
                        >
                            В процессе
                        </button>
                        <button
                            onClick={() => changeStatus(techId, 'completed')}
                            className={technology.status === 'completed' ? 'active' : ''}
                        >
                            Завершено
                        </button>
                    </div>
                </div>
                {technology.notes && (
                    <div className="detail-section">
                        <h3>Мои заметки</h3>
                        <p>{technology.notes}</p>
                    </div>
                )}
            </div>
        </div >
    );
}
export default TechnologyDetail;