import "./TechnologyCard.css"
import TechnologyNotes from "./TechnologyNotes";

function TechnologyCard({ technology, chSt, onUpdateNotes }) {
    return (
        <div className={`tech-card ${technology.status}`}>
            <h3>{technology.title}</h3>
            <p>{technology.description}</p>
            <p>Статус: {technology.status === "completed" ? '✅' : (technology.status === "in-progress" ? '⏳' : '❌')}</p>
            <button onClick={() => { chSt(technology.id) }}>Сменить статус</button>
            <TechnologyNotes
                notes={technology.notes}
                onNotesChange={onUpdateNotes}
                techId={technology.id}
            />
        </div>
    );
}

export default TechnologyCard;