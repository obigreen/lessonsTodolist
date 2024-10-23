import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import AddBoxIcon from '@mui/icons-material/AddBox'
import IconButton from '@mui/material/IconButton'


type PropsType = {
    addItem: (title: string) => void
}


export const AddItemForm = ({addItem}: PropsType) => {


    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            addItemHandler()
        }
    }

    return (
        <div>
            <TextField
                label={'Enter a title'}
                variant={'outlined'}
                size={'small'}
                error={!!error}
                helperText={error}
                value={title}
                onChange={changeItemTitleHandler}
                onKeyUp={addItemOnKeyUpHandler}/>
            <IconButton color={'primary'} onClick={addItemHandler}>
                <AddBoxIcon/>
            </IconButton>
        </div>
    );
};

