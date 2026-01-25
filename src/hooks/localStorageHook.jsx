export default function useLocalStorage(){
    const setLocal=(key,val)=>{
       localStorage.setItem(key,JSON.stringify(val))
    }

    const getLocal=(key)=>{
        const value=localStorage.getItem(key)
        console.log(value,"local")
       return value ? JSON.parse(value): null
    }

    const removeLocal=(key)=>{
         localStorage.removeItem(key)
    }

    return{setLocal,getLocal,removeLocal}
}