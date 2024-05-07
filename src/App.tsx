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

    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false}
    ]);

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

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


    return (
        <div className={'App'}>
            <Todolist title={"What to learn"}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    )
}

export default App;
