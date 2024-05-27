import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {useState, KeyboardEvent, ChangeEvent} from "react";



type PropsType = {
    title: string
    tasks: TaskType[]
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, newIsDoneValue: boolean) => void
    // changeFilter: (filter: FilterValuesType) => void
}


export const Todolist = ({title, tasks, removeTask, addTask, changeTaskStatus}: PropsType) => {

    // UI logic
    // stats
    const [filter, setFilter] = useState<FilterValuesType>('All')
    const [taskTitle, setTaskTitle] = useState("")

    const [error, setError] = useState<string | null>(null)


    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const getFilteredTasks = (allTasks: Array<TaskType>, filterValue: FilterValuesType): Array<TaskType> => {
        switch (filterValue) {
            case "Active":
                return allTasks.filter(t => !t.isDone);
            case "Completed":
                return allTasks.filter(t => t.isDone);
            default:
                return allTasks;
        }
    }

    const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)


    const addTaskHandler = () => {

        const trimmedTaskTitle = taskTitle.trim()
        if(trimmedTaskTitle !== "") {
            addTask(taskTitle)
        } else {
            setError("Title is requiared")
        }
        setTaskTitle("")
    }


    // обработчик срабатывает, но ничего не добавляет
    const addTaskOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && taskTitle) {
            addTaskHandler()
        }
    }

    const changeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(null)
        setTaskTitle(e.currentTarget.value)
    }

    const isAddBtnDis = taskTitle.length === 0 || taskTitle.trim().length >= 15

    return (
        <div className='todolist'>
            <h2>{title}</h2>
            <div>
                <input value={taskTitle}
                       onChange={changeTaskTitleHandler}
                       onKeyUp={addTaskOnKeyUpHandler}
                       className={error ? 'task-input-error' : ""}/>

                <Button title={"+"}
                        onClick={addTaskHandler}
                        disabled={isAddBtnDis}/>

                {/*{error ? <div>{error}</div> : ''}*/}
                {error && <div style={{color: "red"}}>{error}</div>}
                {taskTitle.trim().length > 10 && taskTitle.length < 15 && <div>recommended 10 characters</div>}
                {taskTitle.trim().length >= 15 && <div style={{color: "red"}}>Title is too long</div>}
            </div>

            {filteredTasks.length === 0 ? <p>not tasks</p> :
                <ul>
                    {filteredTasks.map(t => {

                            const onClickRemoveTaskHandler = () => removeTask(t.id)

                            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(t.id, e.currentTarget.checked)

                            return (
                                <li key={t.id}>
                                    <input type='checkbox'
                                           checked={t.isDone}
                                           onChange={changeTaskStatusHandler}/>
                                    <span className={t.isDone ? "task-done" : "task"}>{t.title}</span>
                                    <Button onClick={onClickRemoveTaskHandler} title={"x"}/>
                                </li>
                            )
                        }
                    )}
                </ul>
            }

            <div>
                <Button title={"All"}
                        onClick={() => changeFilter('All')}
                        classes={filter === "All" ? "btn-filter-active" : ""}/>


                <Button title={"Active"}
                        onClick={() => changeFilter('Active')}
                        classes={filter === "Active" ? "btn-filter-active" : ""}/>

                <Button title={"Completed"}
                        onClick={() => changeFilter('Completed')}
                        classes={filter === "Completed" ? "btn-filter-active" : ""}/>
            </div>
        </div>
    )
}

