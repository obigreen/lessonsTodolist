type ButtonPropsType = {
    title: string
    // void function ничего не возвращает
    onClick: () => void
    disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: ButtonPropsType) => {

    const onClickHandler = () => {onClick()}

    return <button onClick={onClickHandler} disabled={disabled}>{title}</button>
}