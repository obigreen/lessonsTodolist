import React from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from "uuid";




// дополникть в конспект
// C create
// R (view mode, filter, sort, search, pagination)
// U update (change task title, change task status)
// D delite


function App() {
    // BLL - bisnes logic lair
    // data

    // const tasks = [
    //     {id: v1(), title: 'HTML&CSS', isDone: true},
    //     {id: v1(), title: 'JS', isDone: true},
    //     {id: v1(), title: 'ReactJS', isDone: false}
    // ];



    return (
        <div className={'App'}>
            <Todolist title={'Todo one'}/>
        </div>
    )
}

export default App;
