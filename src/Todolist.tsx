import {Button} from "./Button";



type PropsType = {
    title: string
}


export const Todolist = ({title}: PropsType) => {


    return (
        <div className='todolist'>
            <h1>{title}</h1>

            <div>
                <input/>
                <Button title={"+"}/>
            </div>

            <ul>
                <li>
                    <input type='checkbox' checked={false}/>
                    <span>HTML&CSS</span>
                    <Button title={"x"}/>
                </li>
            </ul>


            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    )
}

