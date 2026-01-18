import "./input.css"
export default function InputFeild({type,value,
    placeholder,name,id,onChange,disabled=false
    
}){
    return(
        <input type={type || "text"} value={value} disabled={disabled} onChange={onChange} name={name} id={id} placeholder={placeholder || ""} />
    )
}