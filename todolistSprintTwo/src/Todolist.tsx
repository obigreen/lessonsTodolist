import React from "react";
import Button from '@mui/material/Button';
import {FilterValueType, TaskType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


type PropsType = {
    title: string
    tasks: TaskType[]
    todolistId: string
    removeTasks: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterValueType) => void
    filter: FilterValueType
    changeTaskStatus: (todolistId: string, taskId: string, taskStatus: boolean) => void
    removeTodolist: (todolistId: string) => void
    addTask: (todolistId: string, title: string) => void
    updateTask: (todolistId: string, taskId: string, title: string) => void
}


export const Todolist = (
    {
        title,
        tasks,
        removeTasks,
        changeFilter,
        todolistId,
        changeTaskStatus,
        removeTodolist,
        addTask,
        updateTask,
        filter
    }: PropsType) => {


    // let tasksForTodolist = tasks
    // if (filter === "Active") {
    //     tasksForTodolist = tasks.filter(el => !el.isDone)
    // }
    // if (filter === "Completed") {
    //     tasksForTodolist = tasks.filter(el => el.isDone)
    // }

    const getFilteredTasks = (tasks: TaskType[], filter: FilterValueType) => {
        switch (filter) {
            case 'Active':
                return tasks.filter(t => !t.isDone);
            case 'Completed':
                return tasks.filter(t => t.isDone);
            default:
                return tasks;
        }
    };
    const tasksForTodolist = getFilteredTasks(tasks, filter);

    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }

    const addTaskCallback = (title: string) => {
        addTask(todolistId, title)
    }

    const changeFilterTasksHandler = (filter: FilterValueType) => {
        changeFilter(todolistId, filter)
    }

    return (
        <div className='todolist'>
            <div className={'todolist-title-container'}>
                <h1>{title}</h1>
                <IconButton title={'x'} onClick={removeTodolistHandler}>
                    <DeleteIcon/>
                </IconButton>
            </div>

            <div>
                <AddItemForm addItem={addTaskCallback}/>
            </div>

            {
                tasksForTodolist.length === 0 ?
                    <p>no tasts</p> :
                    <List>
                        {tasksForTodolist.map(t => {
                            const onClickRemoveTaskHandler = () => {
                                removeTasks(todolistId, t.id)
                            }

                            const changeTaskStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                                changeTaskStatus(todolistId, t.id, e.currentTarget.checked)
                            }

                            const changeTaskTitleHandler = (title: string) => {
                                updateTask(todolistId, t.id, title)
                            }


                            return (
                                <ListItem key={t.id} className={t.isDone ? 'is-done' : ''}>
                                    <Checkbox onChange={changeTaskStatusHandler} checked={t.isDone}/>
                                    <EditableSpan onChange={changeTaskTitleHandler} value={t.title}/>
                                    <IconButton title={'x'} onClick={onClickRemoveTaskHandler}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItem>

                            )
                        })}
                    </List>
            }


            <div>
                <Button variant={filter === 'All' ? 'outlined' : 'text'}
                        color={'inherit'}
                        onClick={() => changeFilterTasksHandler('All')}>All</Button>
                <Button variant={filter === 'Active' ? 'outlined' : 'text'}
                        color={'primary'} onClick={() => changeFilterTasksHandler('Active')}>Active</Button>
                <Button variant={filter === 'Completed' ? 'outlined' : 'text'}
                        color={'secondary'} onClick={() => changeFilterTasksHandler('Completed')}>Completed</Button>
            </div>
        </div>
    )
}

