import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({
  inputValue,
  buttonValue,
  onChange,
  onClick,
  placeholder,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Input value={inputValue} onChange={onChange} placeholder={placeholder} />
      <Button onClick={onClick} value={buttonValue} />
    </div>
  );
}
