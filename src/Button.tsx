type ButtonPropsType = {
    title: string
    // void function ничего не возвращает
    onClick: () => void
}

export const Button = ({ title, onClick }: ButtonPropsType) => {

    const onClickHandler = () => {onClick()}

    return <button onClick={onClickHandler}>{title}</button>
}