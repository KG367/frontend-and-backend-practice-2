function QuickActions({ completeAll, resetAll, random }) {
    return (
        <div>
            <button onClick={completeAll}>Отметить все как выполненное</button>
            <button onClick={resetAll}>Сбросить все</button>
            <button onClick={random}>Переключение на следующего случайного элемента</button>
        </div>
    )
}

function Filters({ setFilter }) {
    return (
        <div>
            <button onClick={() => setFilter("all")}>Показать все</button>
            <button onClick={() => setFilter("not-started")}>Показать не начатые</button>
            <button onClick={() => setFilter("in-progress")}>Показать в прогрессе</button>
            <button onClick={() => setFilter("completed")}>Показать завершённые</button>
        </div>
    )
}

function Search({ query, setQuery }) {
    return <div className="search-box">
        <input
            type="text"
            placeholder="Поиск технологий..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    </div>
}

export { QuickActions, Filters, Search };