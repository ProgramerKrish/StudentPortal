import "../components/btn.css"
export default function Btn({
    children,
    type="button",
    onClick,
    disabled
}){

    return (
        <button className="btn" type={type} onClick={onClick} disabled={disabled}>{children}</button>
    )
}