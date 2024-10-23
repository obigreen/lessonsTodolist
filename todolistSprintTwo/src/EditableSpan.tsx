import React, {useState} from 'react';
import TextField from "@mui/material/TextField";

type PropsType = {
    value: string
    onChange: (newTitle: string) => void
}

export const EditableSpan = ({value, onChange}: PropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(value)

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }

    const deactivateEditModeHandler = () => {
        setEditMode(false)
        onChange(title)
    }

    const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (

        <>
            {editMode ?
                (<TextField value={title}
                            variant={'outlined'}
                            size={'small'}
                            onChange={changeTitleHandler}
                            onBlur={deactivateEditModeHandler}
                            autoFocus/>)
                :
                (<span onDoubleClick={onDoubleClickHandler}>{value}</span>)}
        </>
    );
};

