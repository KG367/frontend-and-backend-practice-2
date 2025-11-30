import { useState } from "react"
import Stats from "./Stats";

function AddTechnology({ addNew, fetchTech }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStat] = useState("not-started");

    const fillRandom = async () => {
        const randTech = await fetchTech();
        setName(randTech.spell)
        setDesc(randTech.use)
    }

    const add = () => {
        addNew({
            title: name,
            description: desc,
            status: status
        })
        setName('');
        setDesc('');
        setStat("not-started");
        alert("Добавлено")
    }

    return (
        <div>
            <p>Название:</p>
            <input value={name} onChange={e => setName(e.target.value)} />
            <p>Описание:</p>
            <input value={desc} onChange={e => setDesc(e.target.value)} />
            <p>Статус:</p>
            <button onClick={() => setStat("not-started")} >Не начато</button>
            <button onClick={() => setStat("in-progress")} >В прогрессе</button>
            <button onClick={() => setStat("completed")} >Завершено</button>
            <p>Текущий статус: {status === "completed" ? "Завершено" : status === "in-progress" ? "В прогрессе" : "Не начато"}</p>
            <button onClick={fillRandom}>Заполнить случайно</button>
            <button onClick={add}>Добавить</button>
        </div>
    )
}

export default AddTechnology;