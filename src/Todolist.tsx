import React from 'react'
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TaskType[]
//     ||
//     tasks: Array<TaskType>
    removeTasak:  (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}


export const Todolist = (props: PropsType) => {
    return (
        <div className={'Todolist'}>
            <h2>{props.title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li><input type='checkbox' checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {props.removeTasak(t.id)}}>x</button>
                        </li>
                    )
                }
                <div>
                    <button onClick={() => {props.changeFilter("All")}}>All</button>
                    <button onClick={() => {props.changeFilter("Active")}}>Active</button>
                    <button onClick={() => {props.changeFilter("Completed")}}>Completed</button>
                </div>
            </ul>
        </div>
    )
}


// 1 твердо установленное значение index(а) []
//
//                 <li>
//                     <input type='checkbox' checked={tasks[1].isDone}/>
//                     <span>{tasks[1].title}</span>
//                 </li>

{/*<li>*/
}
{/*    /!*берем из [] 0вой (1ый) объект []ва конкретно isDone*!/*/
}
{/*    <input type='checkbox' checked={tasks[0].isDone}/>*/
}
{/*    <span>{tasks[0].title}</span>*/
}
{/*</li>*/
}