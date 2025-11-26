function ProgressHeader({techs}) {
    return (
        <div>
            <p>Всего технологий: {techs.length}</p>
            <p>Закончено: {techs.filter(x=>x.status === "completed").length}</p>
            <p>В процессе: {techs.filter(x=>x.status === "in-progress").length}</p>
            <p>Не начато: {techs.filter(x=>x.status === "not-started").length}</p>
            <p>Прогресс: &nbsp;
                <progress max={techs.length} value={techs.filter(x=>x.status === "completed").length}/>
            </p>
        </div>
    );
}

export default ProgressHeader;