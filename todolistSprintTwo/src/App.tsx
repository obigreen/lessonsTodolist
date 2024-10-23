import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper'


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

type TasksStateType = {
    [key: string]: TaskType[]
}

export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {

    const todolistID1 = v1()
    const todolistID2 = v1()

    let [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'All'},
        {id: todolistID2, title: 'What to buy', filter: 'All'},
    ]);


    const [tasks, setTasks] = useState<TasksStateType>({
            [todolistID1]: [
                {id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: true},
                {id: v1(), title: 'ReactJS', isDone: false}
            ],
            [todolistID2]: [
                {id: v1(), title: 'Milk', isDone: true},
                {id: v1(), title: 'Eggs', isDone: true},
                {id: v1(), title: 'Vegetables', isDone: false}
            ],
        }
    );


    //removeTasks
    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
    }


    //filter
    const changeFilter = (todolistId: string, filter: FilterValueType) => {
        setTodolists(todolists.map(el => (el.id === todolistId ? {...el, filter} : el)))
    }

    //addTask
    const addTask = (todolistId: string, title: string) => {
        const newTask = {
            id: v1(),
            title,
            isDone: false,
        }

        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    //changeTaskStatus
    const changeTaskStatus = (todolistId: string, taskId: string, taskStatus: boolean) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(t => (t.id === taskId ? {...t, isDone: taskStatus} : t))
        })
    }

    //removeTodolist
    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
    }

    //addTodolist
    const addTodolist = (title: string) => {
        const todolistId = v1()
        const newTodolist: TodolistType = {id: todolistId, title: title, filter: 'All'}
        setTodolists([newTodolist, ...todolists])
        setTasks({...tasks, [todolistId]: []})
    }

    //updateTask
    const updateTask = (todolistId: string, taskId: string, title: string) => {
        const newTodolistTasks = {
            ...tasks, [todolistId]: tasks[todolistId].map(t => (t.id === taskId ? {...t, title} : t))
        }
        setTasks(newTodolistTasks)
    }

    return (
        <div className={'App'}>
            <AppBar position="static" sx={{ mb: '30px' }}>
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid2 container sx={{ mb: '30px' }}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid2>

                <Grid2 container spacing={4}>
                    {todolists.map(el => {
                        const allTodolistTasks = tasks[el.id]


                        return (
                            <Grid2>
                                <Paper sx={{ p: '0 20px 20px 20px' }}>
                                    <Todolist updateTask={updateTask}
                                              key={el.id}
                                              title={el.title}
                                              tasks={allTodolistTasks}
                                              todolistId={el.id}
                                              removeTasks={removeTask}
                                              changeFilter={changeFilter}
                                              removeTodolist={removeTodolist}
                                              changeTaskStatus={changeTaskStatus}
                                              filter={el.filter}
                                              addTask={addTask}
                                    />
                                </Paper>

                            </Grid2>

                        )
                    })}
                </Grid2>

            </Container>



        </div>
    )
}

export default App;
