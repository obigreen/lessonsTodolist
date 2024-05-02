import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'

// CRUT операции
// Create
// Read
// Update
// Delete

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export type FilterValuesType = "All" | "Active" | "Completed"


function App() {

    const todoListTitle = "What to learn"
    // global state
    let [tasks, setTasks] = useState([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]);

    // удаление tasks
    function removeTasak(taskId: number) {
        // через filter
        let resutlTasks = tasks.filter(t => t.id !== taskId) // к примеру если
        // id не равно(!==) выбранному для удаления id то вернет true
        // если равен то false
        setTasks(resutlTasks)

        // через цикл
        // const newState = []
        // for (let i = 0; i < tasks.length; i++) {
        //     if (tasks[i].id !== taskId) {
        //         newState.push(tasks[i])
        //     }
        // }
        // setTasks(newState)
    }

    // фильтрация списков по кнопкам
    // local state
    const [filter, setFilter] = useState<FilterValuesType>("All")

    const changeFilter = (nextFilter: FilterValuesType) => {
        setFilter(nextFilter)
    }
    // UI
    const getTasksForTodolist = (allTasks: Array<TaskType>, nextFilterValue: FilterValuesType) => {
        switch (nextFilterValue) {
            case "Active":
                //!t.isDone упрощена от t.isDone === false, если сокращать, обязательно отследить что бы у false стояло !-не, а то у меня 2 кнопки отрабатывали Completed так как я просто сократил t.isDone оба =)
                return allTasks.filter(t => !t.isDone);
            case "Completed":
                return allTasks.filter(t => t.isDone);
            default:
                return allTasks;
        }
    }
    const tasksForTodolist = getTasksForTodolist(tasks, filter);


    // function changeFilter(value: FilterValuesType) {
    //     setFilter(value);
    // }
    // let tasksForTodolist = tasks;
    // if (filter === "Completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone);
    // }
    //
    // if (filter === "Active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone);
    // }


    // ==========================================================================
    return (
        <div className={'App'}>
            <Todolist title={todoListTitle}
                      tasks={tasksForTodolist}
                // пробрасываем removeTasak в котором resutlTasks
                // результат фильтрации tasks
                // removeTasak это props в который мы передаем f removeTasak
                      removeTasak={removeTasak}
                      changeFilter={changeFilter}
            />
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