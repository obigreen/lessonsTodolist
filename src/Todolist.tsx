import React from 'react'


type PropsType = {
    title: string
}


export const Todolist = ({title}: PropsType) => {
    return (
        <div className={'Todolist'}>
            <h2>{title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type='checkbox' checked={true}/>
                    <span>CSS&HTML</span>
                </li>
                <li>
                    <input type='checkbox' checked={true}/>
                    <span>JS</span>
                </li>
                <li>
                    <input type='checkbox' checked={false}/>
                    <span>React</span>
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