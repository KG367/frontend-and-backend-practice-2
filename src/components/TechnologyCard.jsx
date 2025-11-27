import "./TechnologyCard.css"
import TechnologyNotes from "./TechnologyNotes";

function TechnologyCard({ technology, onStatusChange, onNotesChange }) {
    return (
        <div className={`tech-card ${technology.status}`}>
            <h3>{technology.title}</h3>
            <p>{technology.description}</p>
            <p>Статус: {technology.status === "completed" ? '✅' : (technology.status === "in-progress" ? '⏳' : '❌')}</p>
            <button onClick={() => onStatusChange(technology.id)}>Сменить статус</button>
            <TechnologyNotes
                notes={technology.notes}
                onNotesChange={onNotesChange}
                techId={technology.id}
            />
        </div>
    );
}

export default TechnologyCard;