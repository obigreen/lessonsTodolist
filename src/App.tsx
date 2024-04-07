import React, {useState} from 'react'
import './App.css'
import {TaskType, Todolist} from './Todolist'

// let tasks2 = [
//     {id: 1, title: "Terminator", isDone: true},
//     {id: 2, title: "XXX", isDone: false},
//     {id: 3, title: "Jentlments of fortune", isDone: true},
// ]


export type FilterValuesType = "All" | "Active" | "Completed"


function App() {

    let [tasks, setTasks] = useState< Array<TaskType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("All")

    function removeTasak(id: number) {
        let resutlTasks = tasks.filter(t => t.id !== id)
        setTasks(resutlTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    let tasksForTodolist = tasks;
    if (filter === "Completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);

    }
    if (filter === "Active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);

    }

    return (
        <div className={'App'}>
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTasak={removeTasak}
                      changeFilter={changeFilter}/>
            {/*<Todolist title="Movies" tasks={tasks}/>*/}
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