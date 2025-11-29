import { useEffect, useState } from "react";

function Settings() {
    const [technologies, setTechnologies] = useState([]);
    useEffect(() => {
        const saved = localStorage.getItem('technologies');
        if (saved) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTechnologies(JSON.parse(saved));
        }
    }, []);
    const exportData = () => {
        const data = {
            exportedAt: new Date().toISOString(),
            technologies: technologies
        };
        const dataStr = JSON.stringify(data, null, 2);
        console.log('Данные для экспорта:', dataStr);
        alert("Данные для экспорта выведены в консоль")
    }
    return (
        <div>
            <button onClick={ exportData }>Экспорт данных</button>
        </div>
    )
}

export default Settings;