import { useAuth } from "../context/AuthContext"
import { useEffect,useState } from "react"
import Btn from "../components/btn"
import Loader from "../components/loader.jsx"
export default function DashBoard(){
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(true)

    /* useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]) 

    useEffect(()=>{
        async function loadUsers(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data)
        }
        loadUsers();
    },[]) */

    useEffect(()=>{
        try{
        async function loadPosts(){
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPosts(data)
            setLoading(false)
            console.log(data)
        }loadPosts() }
        catch(err){console.error("error caused",err)}
        
    },[])

    const {logout}=useAuth()
    return(
        <>
        <h1>users</h1>
        {loading?<Loader/>:posts.map(post=>(<p key={post.id}>{post.title}</p>))}
        <Btn onClick={logout}>logout</Btn>
        </>

    )}
