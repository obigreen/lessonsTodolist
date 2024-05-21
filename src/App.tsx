import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

// дополникть в конспект
// C create
// R (view mode, filter, sort, search, pagination)
// U update (change task title, change task status)
// D delite

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


    // D - Delete
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    // U - Update

    //() в скобках таких параметры
    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
        // это первый простой, но код будет лучше (этот плох тем что изменяет объект и не копирует)

        // const taskForUpdate: TaskType | undefined = tasks.find(t => t.id === taskId)
        // if (taskForUpdate) {
        //     taskForUpdate.isDone = !taskForUpdate.isDone
        // }
        // setTasks([...tasks])

        const nextState: Array<TaskType> = tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t)
            setTasks(nextState)

    }

    // C - Create
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
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}/>
        </div>
    )
}

export default App;
