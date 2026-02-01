import { useAuth } from "../context/AuthContext"
import { useEffect,useState } from "react"
import Btn from "../components/btn"
import Loader from "../components/loader.jsx"
import ProfileCard from "../components/profileCard.jsx"
export default function DashBoard(){
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(true)
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
        <ProfileCard 
        name="krish"
        dept="AI&DS"
        batch="2024-28"
        role="student"
        />
        {loading?<Loader/>:posts.map(post=>(<p key={post.id}>{post.title}</p>))}
        <Btn onClick={logout}>logout</Btn>
        </>

    )}
