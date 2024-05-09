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

    // change logic
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }


    // filter tasks with list
    const [filter, setFilter] = useState<FilterValuesType>
    ('All')
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    let taskForTodolist = tasks
    if (filter === 'Active') {
        taskForTodolist = tasks.filter(task => !task.isDone)
    }
    if (filter === 'Completed') {
        taskForTodolist = tasks.filter(task => task.isDone)
    }


    // add task
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        // вроде как порядок ...tasks, newTask определяет, будет ли добавляться в конце списка или в начале
        const nextTasksState = [...tasks, newTask]
        setTasks(nextTasksState)
        // short version
        // setTasks([...tasks, newTask])

        // супииииркоротко, можно удалить все что выше до addTask
        // setTasks([{id: v1(), title, isDone: false}, ...tasks])
    }


    return (
        <div className={'App'}>
            <Todolist title={todolistTitle}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    )
}

export default App;
