import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent,} from "react";
import {Button} from "./Button";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    title: string
    tasks: TaskType[]
    todolistId: string
    filter: FilterValuesType

    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
    RemoveTodolist: (todolistId: string) => void
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => void
    changeTodolistTitle: (title: string, todolistId: string) => void
}

export const Todolist = (props: PropsType) => {
    const {
        title,
        tasks,
        filter,
        removeTask,
        changeFilter,
        addTask,
        changeTaskStatus,
        todolistId,
        RemoveTodolist,
        changeTaskTitle,
        changeTodolistTitle,
    } = props


    const addTaskCallback = (taskTitle: string) => {
        addTask(taskTitle, todolistId)
    }


    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(filter, todolistId)
    }


    const changeTodolistTitleCallback = (newTitle: string) => {
        changeTodolistTitle(newTitle, todolistId)
    }


    return (
        <div>
            <h3>
                <EditableSpan title={title} changeTitle={changeTodolistTitleCallback} />
                <button onClick={() => RemoveTodolist(todolistId)}>x</button>
            </h3>
            <AddItemForm addItem={addTaskCallback}/>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {tasks.map((task) => {



                            const removeTaskHandler = () => {
                                removeTask(task.id, todolistId)
                            }

                            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                const newStatusValue = e.currentTarget.checked
                                changeTaskStatus(task.id, newStatusValue, todolistId)
                            }
                            const changeTaskTitleCollback = (newTitle: string) => {
                                changeTaskTitle(task.id, newTitle, todolistId)
                            }


                            return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
                                <EditableSpan title={task.title} changeTitle={changeTaskTitleCollback}/>
                                <Button onClick={removeTaskHandler} title={'x'}/>
                            </li>
                        })}
                    </ul>
            }
            <div>
                <Button className={filter === 'all' ? 'active-filter' : ''} title={'All'}
                        onClick={() => changeFilterTasksHandler('all')}/>
                <Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'}
                        onClick={() => changeFilterTasksHandler('active')}/>
                <Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'}
                        onClick={() => changeFilterTasksHandler('completed')}/>
            </div>
        </div>
    )
}
