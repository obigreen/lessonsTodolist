import {v1} from 'uuid';
import {TasksStateType} from '../App';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE_TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(el => el.id !== action.payload.taskId)
            }
        }

        case 'ADD_TASK': {
            const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        }

        case 'CHANGE_TASK_STATUS': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id == action.payload.taskId ? {
                    ...t,
                    isDone: action.payload.isDone
                } : t)
            }
        }

        case 'UPDATE_TASK_STATUS': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ? {
                    ...t,
                    title: action.payload.title
                } : t)
            }
        }

        case 'REMOVE-TODOLIST': {
            const newState = {...state}
            delete newState[action.payload.todolistId]
            return newState
        }

        case 'ADD-TODOLIST': {
            return {...state, [action.payload.todolistId]: []}
        }

        default:
            throw new Error('I don\'t understand this type')
    }
}

// Action creators
export const removeTaskAC = (payload: { todolistId: string, taskId: string }) => {
    return {type: 'REMOVE_TASK', payload} as const
}

export const addTaskAC = (payload: { todolistId: string, title: string }) => {
    return {type: 'ADD_TASK', payload} as const
}

export const changeTaskStatusAC = (payload: { todolistId: string, taskId: string, isDone: boolean }) => {
    return {type: 'CHANGE_TASK_STATUS', payload} as const
}
export const updateTaskTitleAC = (payload: { todolistId: string, taskId: string, title: string }) => {
    return {type: 'UPDATE_TASK_STATUS', payload} as const
}

// Actions types
export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>

export type AddTaskActionType = ReturnType<typeof addTaskAC>

export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>

export type UpdateTaskStatusActionType = ReturnType<typeof updateTaskTitleAC>

type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | UpdateTaskStatusActionType
    | RemoveTodolistActionType
    | AddTodolistActionType
