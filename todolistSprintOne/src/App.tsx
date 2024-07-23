import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = 'All' | 'Active' | 'Completed'


function App() {
    // BLL - bisnes logic lair
    // data

    const todoListTitle = "Todo one";
    const [filter, setFilter] = useState<FilterValueType>('All')


    const [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false}
        ]
    );


    //removeTasks
    const removeTasks = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    //filter
    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    //addTask
    const addTask = (title: string) => {
        const newTask = {
            id: v1(),
            title,
            isDone: false,
        }

        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className={'App'}>
            <Todolist title={todoListTitle}
                      tasks={tasks}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      filter={filter}
                      addTask={addTask}
            />
        </div>
    )
}

export default App;
