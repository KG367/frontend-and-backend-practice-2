import "./TechnologyCard.css"

function TechnologyCard({ technology, chSt }) {
    return (
        <div className={`tech-card ${technology.status}`}>
            <h3>{technology.title}</h3>
            <p>{technology.description}</p>
            <p>Статус: {technology.status === "completed" ? '✅' : (technology.status === "in-progress" ? '⏳' : '❌')}</p>
            <button onClick={()=>{chSt(technology.id)}}>Сменить статус</button>
        </div>
    );
}

export default TechnologyCard;