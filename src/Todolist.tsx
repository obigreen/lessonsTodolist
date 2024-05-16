import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {useState, KeyboardEvent, ChangeEvent} from "react";


type PropsType = {
    title: string
    tasks: TaskType[]
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
}


export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {

    //ui logic
    const [taskTitle, setTaskTitle] = useState("")

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    // обработчик срабатывает, но ничего не добавляет
    const addTaskOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && taskTitle) {
            addTaskHandler()
        }
    }

    const changeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)
    const isAddBtnDis = taskTitle.length === 0 || taskTitle.length > 15

    return (
        <div className='todolist'>
            <h2>{title}</h2>
            <div>
                <input value={taskTitle}
                       onChange={changeTaskTitleHandler}
                       onKeyUp={addTaskOnKeyUpHandler}/>

                <Button title={"+"}
                        onClick={addTaskHandler}
                        disabled={isAddBtnDis}/>

                {
                    taskTitle.length > 15
                        ? <div>max 15 characters</div>
                        : taskTitle.length > 10 && <div>recommended 10 characters</div>
                }
            </div>

            {tasks.length === 0 ? <p>not tasks</p> :
                <ul>
                    {tasks.map(t => {

                            const onClickRemoveTaskHandler = () => {
                                removeTask(t.id);
                            }

                            return (
                                <li key={t.id}>
                                    <input type='checkbox' checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <Button onClick={onClickRemoveTaskHandler} title={"x"}/>
                                </li>
                            )
                        }
                    )}
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

