import ProgressBar from "../components/ProgressBar";
import { useEffect, useState } from "react";

function Stats() {
    const [technologies, setTechnologies] = useState([]);
    useEffect(() => {
        const saved = localStorage.getItem('technologies');
        if (saved) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTechnologies(JSON.parse(saved));
        }
    }, []);
    const completed = technologies.filter((t) => t.status === "completed").length
    return (
        <section>
            <ProgressBar
                progress={Math.floor((completed / technologies.length) * 100)}
                label="Общий прогресс: "
                color="#4CAF50"
                animated={true}
                height={20}
            />
            <p>Не начато: {technologies.filter((t) => t.status === "not-started").length}</p>
            <p>В процессе: {technologies.filter((t) => t.status === "in-progress").length}</p>
            <p>Закончено: {completed}</p>
        </section>
    )
}

export default Stats;