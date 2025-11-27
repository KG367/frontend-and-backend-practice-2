import { useEffect, useState } from 'react';
// Начальные данные для технологий
const initialTechnologies = [
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
];
const nextStatus = (current) => {
    const order = ["not-started", "in-progress", "completed"];
    const idx = order.indexOf(current);
    return order[(idx + 1) % order.length];
};
export default function useTechnologies() {
    const [technologies, setTechnologies] = useState(initialTechnologies);

    // выполнение загрузки данных только при первом рендере
    useEffect(() => {
        const saved = localStorage.getItem("technologies");
        if (saved) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTechnologies(JSON.parse(saved));
            console.log("Данные загружены из localStorage");
        }
    }, []);

    // сохранение изменений technologies
    useEffect(() => {
        if (localStorage.getItem("technologies")) {
            localStorage.setItem(
                "technologies",
                JSON.stringify(technologies)
            );
            console.log("Данные сохранены в localStorage");
        }
    }, [technologies]);
    // Функция для обновления статуса технологии
    const updateStatus = (techId) => {
        setTechnologies(prev =>
            prev.map(tech =>
                tech.id === techId ? { ...tech, status: nextStatus(tech.status) } : tech
            )
        );
    };
    // Функция для обновления заметок
    const updateNotes = (techId, newNotes) => {
        setTechnologies(prev =>
            prev.map(tech =>
                tech.id === techId ? { ...tech, notes: newNotes } : tech
            )
        );
    };
    // Функция для расчета общего прогресса
    const calculateProgress = () => {
        if (technologies.length === 0) return 0;
        const completed = technologies.filter(tech => tech.status ===
            'completed').length;
        return Math.round((completed / technologies.length) * 100);
    };
    const markAll = () => {
        setTechnologies((prev) =>
            prev.map((t) =>
                ({ ...t, status: "completed" })
            )
        );
    };
    const resetAll = () => {
        setTechnologies((prev) =>
            prev.map((t) =>
                ({ ...t, status: "not-started" })
            )
        );
    };
    return {
        technologies,
        updateStatus,
        updateNotes,
        progress: calculateProgress(),
        markAll,
        resetAll
    };
}