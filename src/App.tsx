import React from 'react'
import './App.css'
import {Todolist} from './Todolist'


function App() {
    let tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    let tasks2 = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Jentlments of fortune", isDone: true},
    ]

    return (
        <div className={'App'}>
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    )
}

export default App;


// Конспект по "1 todolist for studients 01"

// Суть React в создании своих выдуманных тегов, например App который отрисовывается в
// index.tsx. Компоненты это function которая отрисовывает jsx разметку
// comm + shift + вернуть откат comm + z
// в {} только js файлы, остальное не обязательно пример <input type='checkbox' checked={true}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//