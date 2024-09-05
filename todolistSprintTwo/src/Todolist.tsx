import {Button} from "./Button";
import {FilterValueType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";


type PropsType = {
    title: string
    tasks: TaskType[]
    removeTasks: (taskId: string) => void
    changeFilter: (filter: FilterValueType) => void
    filter: FilterValueType
    addTask: (title: string) => void
}


export const Todolist = ({title, tasks, removeTasks, changeFilter, filter, addTask}: PropsType) => {

    const [taskTitle, setTaskTitle] = useState('')

    const getFilteredTasks = (allTasks: Array<TaskType>, filterValue: FilterValueType): Array<TaskType> => {
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
        addTask(taskTitle)
        setTaskTitle('')
    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (
        <div className='todolist'>
            <h1>{title}</h1>

            <div>
                <input value={taskTitle} onChange={changeTaskTitleHandler}
                onKeyUp={addTaskOnKeyUpHandler}/>
                <Button title={"+"} onClick={addTaskHandler}/>
            </div>

            {
                filteredTasks.length === 0 ?
                    <p>no tasts</p> :
                    <ul>
                        {filteredTasks.map(t => {
                            const onClickRemoveTaskHandler = () => {
                                removeTasks(t.id)
                            }

                            return (
                                <li key={t.id}>
                                    <input type='checkbox' checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <Button onClick={onClickRemoveTaskHandler} title={"x"}/>
                                </li>

                            )
                        })}
                    </ul>
            }


            <div>
                <Button title={"All"} onClick={() => {
                    changeFilter('All')
                }}/>
                <Button title={"Active"} onClick={() => {
                    changeFilter('Active')
                }}/>
                <Button title={"Completed"} onClick={() => {
                    changeFilter('Completed')
                }}/>
            </div>
        </div>
    )
}

