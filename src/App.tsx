import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {
    // BLL - bisnes logic lair
    // data
    const todolistTitle = "What to learn";

    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false}
    ]);

    console.log(typeof(v1()));

    // change logic
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    // add task
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        const nextTasksState = [...tasks, newTask]
        setTasks(nextTasksState)
        // short version
        // setTasks([...tasks, newTask])
    }


    return (
        <div className={'App'}>
            <Todolist title={todolistTitle}
                      tasks={tasks}
                      removeTask={removeTask}
                      // changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    )
}

export default App;
