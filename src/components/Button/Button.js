import '../Button/Button.css'
export default function Button({onClick, value}) {
    return (
        <button onClick={onClick}>{value}</button>
    )
}