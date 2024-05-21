type ButtonPropsType = {
    title: string
    // void function ничего не возвращает
    onClick: () => void
    disabled?: boolean
    classes?: string
}

export const Button = ({ title, onClick, disabled, classes }: ButtonPropsType) => {

    const onClickHandler = () => {onClick()}

    return <button onClick={onClickHandler} disabled={disabled} className={classes}>{title}</button>
}