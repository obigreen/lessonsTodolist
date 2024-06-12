import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = 'All' | 'Active' | 'Completed'



function App() {
    // BLL - bisnes logic lair
    // data

    const todoListTitle = "Todo one";
    const [filter, setFilter] = useState<FilterValueType>('All')


    const [tasks, setTasks]  = useState<TaskType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false}
        ]
    );


    //removeTasks
    const removeTasks = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    //filter
    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    return (
        <div className={'App'}>
            <Todolist title={todoListTitle}
                      tasks={tasks}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      filter={filter}
            />
        </div>
    )
}

export default App;
