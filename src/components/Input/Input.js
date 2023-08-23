import '../Input/Input.css'

export default function Input({ placeholder, value, onChange }) {
    return <input placeholder={placeholder} value={value} onChange={onChange} />
}