import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [todolistId: string]: TaskType[]
}

function App() {

    const todolistId1 = v1();
    const todolistId2 = v1();


    const [todolists, setTodolist] = useState<TodolistType[]>([
        {id: todolistId1, title: 'For buy', filter: 'all'},
        {id: todolistId2, title: 'For learn', filter: 'all'}
    ])

    
    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Meat', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
    })


    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
    }
    const addTask = (todolistId: string, title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        const newTasks = {...tasks, [todolistId]: [newTask, ...tasks[todolistId]]}
        setTasks(newTasks)
    }
    const changeFilter = (todolistId: string, filter: FilterValuesType) => {
        const nextState: Array<TodolistType> = todolists.map(t => t.id === todolistId ? {...t, filter} : t)
        setTodolist(nextState)
    }
    const changeTaskStatus = (todolistId: string, taskId: string, taskStatus: boolean) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: taskStatus} : t)})
    }
	const removeTodolist = (todolistId: string) => {
		setTodolist(todolists.filter(t => t.id !== todolistId))
		delete tasks[todolistId]
	}


    return (
        <div className="App">
            {todolists.map((t) => {

                let tasksForTodolist = tasks[t.id]
                if (t.filter === 'active') {
                    tasksForTodolist = tasksForTodolist.filter(task => !task.isDone)
                }

                if (t.filter === 'completed') {
                    tasksForTodolist = tasksForTodolist.filter(task => task.isDone)
                }

                return (
                    <Todolist
                        key={t.id}
                        todolistId={t.id}
                        title={t.title}
                        tasks={tasksForTodolist}
						removeTodolist={removeTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={t.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;
