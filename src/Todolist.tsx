import {Button} from "./Button";



type PropsType = {
    title: string
}


export const Todolist = ({title}: PropsType) => {


    return (
        <div className='todolist'>
            <h2>{title}</h2>

            <div>
                <input/>
                <Button title={"+"}/>
            </div>

            <ul>

                <li>
                    <input type='checkbox' checked={true}/>
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

