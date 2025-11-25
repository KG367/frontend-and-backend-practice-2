import "./TechnologyCard.css"

function TechnologyCard({ title, description, status }) {
    return (
        <div className="tech-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Статус: {status === "completed" ? '✅' : (status === "in-progress" ? '⏳' : '❌')}</p>
        </div>
    );
}

export default TechnologyCard;