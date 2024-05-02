import React from 'react'
import {TaskType} from "./App";
import {Button} from "./Button";


type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
}


export const Todolist = ({title, tasks, removeTask}: PropsType) => {


    return (
        <div className='todolist'>
            <h2>{title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    tasks.map(t => {

                            const onClickRemoveTaskHandler = () => {
                                removeTask(t.id);
                            }

                            return (
                                <li key={t.id}><input type='checkbox' checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <Button onClick={onClickRemoveTaskHandler} title={"x"}/>
                                </li>
                            )
                        }
                    )
                }
            </ul>

            <div>
                <Button onClick={() => {
                }} title={'All'}/>
                <Button onClick={() => {
                }} title={'Active'}/>
                <Button onClick={() => {
                }} title={'Completed'}/>
            </div>
        </div>
    )
}

