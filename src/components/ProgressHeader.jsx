function ProgressHeader({techs}) {
    return (
        <div>
            {console.log(techs)}
            <p>Всего технологий: {techs.length}</p>
            <p>Закончено: {techs.filter(x=>x.status === "completed").length}</p>
            <p>Прогресс: &nbsp;
                <progress max={techs.length} value={techs.filter(x=>x.status === "completed").length}/>
            </p>
        </div>
    );
}

export default ProgressHeader;