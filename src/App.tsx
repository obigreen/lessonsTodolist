import React from 'react'
import './App.css'
import {Todolist} from './Todolist'



function App() {
    // BLL - bisnes logic lair
    // data

    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ];

    return (
        <div className={'App'}>
            <Todolist title={'Todo one'}/>
        </div>
    )
}

export default App;
