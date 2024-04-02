import React from 'react'

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TaskType[]
//     ||
//     tasks: Array<TaskType>
}


export const Todolist = ({title, tasks}: PropsType) => {
    return (
        <div className={'Todolist'}>
            <h2>{title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    {/*берем из [] 0вой (1ый) объект []ва конкретно isDone*/}
                    <input type='checkbox' checked={tasks[0].isDone}/>
                    <span>{tasks[0].title}</span>
                </li>
                <li>
                    <input type='checkbox' checked={tasks[1].isDone}/>
                    <span>{tasks[1].title}</span>
                </li>
                <li>
                    <input type='checkbox' checked={tasks[2].isDone}/>
                    <span>{tasks[2].title}</span>
                </li>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </ul>
        </div>
    )
}