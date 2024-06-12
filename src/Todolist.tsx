import {Button} from "./Button";
import {FilterValueType, TaskType} from "./App";


type PropsType = {
    title: string
    tasks: TaskType[]
    removeTasks: (taskId: number) => void
    changeFilter: (filter: FilterValueType) => void
    filter: FilterValueType
}


export const Todolist = ({title, tasks, removeTasks, changeFilter, filter}: PropsType) => {

    const getFilteredTasks = (allTasks: Array<TaskType>, filterValue: FilterValueType): Array<TaskType> => {
        switch (filterValue) {
            case "Active":
                return allTasks.filter(t => !t.isDone);
            case "Completed":
                return allTasks.filter(t => t.isDone);
            default:
                return allTasks;
        }
    }
    const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)

    return (
        <div className='todolist'>
            <h1>{title}</h1>

            <div>
                <input/>
                <Button title={"+"}/>
            </div>

            {
                filteredTasks.length === 0 ?
                    <p>no tasts</p> :
                    <ul>
                        {filteredTasks.map(t => {
                            const onClickRemoveTaskHandler = () => {
                                removeTasks(t.id)
                            }

                            return (
                                <li key={t.id}>
                                    <input type='checkbox' checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <Button onClick={onClickRemoveTaskHandler} title={"x"}/>
                                </li>

                            )
                        })}
                    </ul>
            }


            <div>
                <Button title={"All"} onClick={() => {changeFilter('All')}}/>
                <Button title={"Active"} onClick={() => {changeFilter('Active')}}/>
                <Button title={"Completed"} onClick={() => {changeFilter('Completed')}}/>
            </div>
        </div>
    )
}

