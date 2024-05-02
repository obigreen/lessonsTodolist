import React from 'react'
import {TaskType} from "./App";
import {Button} from "./Button";



type PropsType = {
    title: string
    tasks: TaskType[]
}


export const Todolist = ({title, tasks}: PropsType) => {

    return (
        <div className='todolist'>
            <h2>{title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    tasks.map(t => <li><input type='checkbox' checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button>x</button>
                        </li>
                    )
                }
            </ul>

            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
        </div>
    )
}

