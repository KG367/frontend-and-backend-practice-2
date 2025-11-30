import { useEffect, useState } from "react";

function SpellApi() {
    const [spell, setSpell] = useState([]);
    const [importing, setImporting] = useState(false);

    const fetchSpell = async () => {
        try {
            setImporting(true);

            const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells/random');
            const a = await res.json()
            setSpell(a);
            localStorage.setItem("spell", JSON.stringify(a));
        } catch (err) {
            console.error('Ошибка загрузки:', err);
        } finally {
            setImporting(false);
        }
    }

    const tryspell = () => {
        let localspell = localStorage.getItem("spell");
        console.log(localspell)
        if (localspell) {
            try {
                localspell = JSON.parse(localspell)
            } catch {
                localspell = null;
            }
            if (localspell !== null) {
                console.log("Беру локальную штуку")
                setSpell(localspell);
                return;
            }
        }

        console.log("Беру штуку из инета")
        fetchSpell();
    }

    useEffect(() => {
        tryspell();
    }, []);

    function Spell() {
        if (spell.length === 0)
            return (
                <p>Загрузка...</p>
            );
        else
            return (
                <div key={spell.index}>
                    <p>Заклинание: {spell.spell}</p>
                    <p>Описание: {spell.use}</p>
                    <button onClick={fetchSpell}>Обновить</button>
                    <button onClick={tryspell}>Попробовать</button>
                </div>
            )
    }

    return {
        spell,
        importing,
        fetchSpell,
        Spell
    }
}

export default SpellApi;