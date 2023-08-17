import Filter from "../filter"
import TaskList from "../taskList"

const ContainerProps = () => {
    const tasks = [
        { id: 1, title: "Comprar leche", completed: true},
        { id: 2, title: "Ir al gimnasio", completed: false},
        { id: 3, title: "Cocinar cena", completed: false}
    ]

    return(
        <div>
            <Filter>
                {(filterState, handleFilterChange) => (
                    <div>
                        <label htmlFor="filter">Filtrar por estado:</label>
                        <select id="filter" value={filterState} onChange={handleFilterChange}>
                            <option value="all">Todos</option>
                            <option value="completed">Completados</option>
                            <option value="uncompleted">Sin completar</option>
                        </select>

                        <TaskList
                            tasks={filterState === "all" 
                            ? tasks 
                            : tasks.filter((task) => filterState === "completed" ? task.completed : !task.completed)
                            }
                        />   
                    </div>
                )}
            </Filter>
        </div>
    )
}

export default ContainerProps