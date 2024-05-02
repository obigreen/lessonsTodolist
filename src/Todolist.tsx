import React, {JSX} from 'react'
import {FilterValuesType, TaskType} from "./App";



type PropsType = {
    title: string
    tasks: TaskType[]
    //     ||
    //     tasks: Array<TaskType>
    //     void - если функция ничего не возвращает, не имеет return
    // вместо taskId можно любое, главное для TS тип, здесь number
    removeTasak: (taskId: number) => void
    changeFilter: (nextFilter: FilterValuesType) => void
    // changeFilter: (value: FilterValuesType) => void
}


export const Todolist = (props: PropsType) => {


    // map через цикл-------------------------------------------------------------------
    // const taskslist: Array<JSX.Element> = []
    // for (let i = 0; i < props.tasks.length; i++) {
    //     taskslist.push(
    //         <li><input type='checkbox' checked={props.tasks[i].isDone}/>
    //             <span>{props.tasks[i].title}</span>
    //             <button onClick={() => {
    //                 props.removeTasak(props.tasks[i].id)
    //             }}>x
    //             </button>
    //         </li>
    //     )
    // }


    // или такой map, вообще метод .map() является более предпочтительным
    const taskslist: Array<JSX.Element> = props.tasks.map(t => {

        const removeTaskHandler = () => props.removeTasak(t.id)
        return (
            <li>
                <input type='checkbox' checked={t.isDone}/>
                <span>{t.title}</span>
                {/*<button onClick={() => {props.removeTasak(t.id)}}>x</button>*/}
                <button onClick={removeTaskHandler}>x</button>
            </li>
        )
    })

    // map через цикл-------------------------------------------------------------------

    return (
        <div className='todolist'>
            <h2>{props.title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {/* map через цикл-------------------------------------------------------------------*/}
                {taskslist}
                {/* map через цикл-------------------------------------------------------------------*/}


                {/*{*/}
                {/*    props.tasks.map(t => <li><input type='checkbox' checked={t.isDone}/>*/}
                {/*            <span>{t.title}</span>*/}
                {/*            <button onClick={() => {props.removeTasak(t.id)}}>x</button>*/}
                {/*        </li>*/}
                {/*    )*/}
                {/*}*/}
            </ul>

            <div>
                <button onClick={() => props.changeFilter("All")}>All</button>
                <button onClick={() => props.changeFilter("Active")}>Active</button>
                <button onClick={() => props.changeFilter("Completed")}>Completed</button>
            </div>
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