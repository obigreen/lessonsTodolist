import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {useRef} from "react";


type PropsType = {
    title: string
    tasks: TaskType[]
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
}


export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {

//
    const taskInputRef = useRef<HTMLInputElement>(null)
    const addTaskHandler = () => {
        if (taskInputRef.current) {
            addTask(taskInputRef.current.value)
            taskInputRef.current.value = ""
        }

        // short
        // taskInputRef.current && addTask(taskInputRef.current.value)

    }
    //supershort
    // const addTaskHandler = () => {
    //     taskInputRef.current && addTask(taskInputRef.current.value)
    // }



    return (
        <div className='todolist'>
            <h2>{title}</h2>
            <div>
                <input ref={taskInputRef}/>
                <Button title={"+"} onClick={addTaskHandler}/>
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

