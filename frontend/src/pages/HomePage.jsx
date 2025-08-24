import React, {useState, useEffect} from 'react'
import Navbar from '../compnents/Navbar'
import RateLimited from '../compnents/RateLimited'
import NotesCard from '../compnents/NotesCard'
import toast from 'react-hot-toast'
import AddFirstNote from './AddFirstNote.jsx'
import {api} from '../lib/axios.js'
const Homepage = () => {
const [isRateLimit,setIsRateLimit]=useState(false)
const [notes,setNotes] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{
  const fetchNotes=async ()=>{
    try{
        const res = await api.get("/route")
        setNotes(res.data)
        setIsRateLimit(false)
        setLoading(false)
    }
    catch(err){
      console.log(err.response)
      if(err.response.status === 429){
        console.log("error occured",err)
        setIsRateLimit(true)
        toast.error("To many requests")
      }else{
        toast.error("Failed Loading Notes")
      }
    }
  }
  fetchNotes()
},[])
  return (
    <div className="font-uniFont">
     <Navbar/>
      {isRateLimit && <RateLimited/>}
      {notes.length<1 && <AddFirstNote/>}
      {loading && <div className="flex justify-center text-black">Loading......</div> }
      {notes.length>0 && 
         <div className="grid grid-cols-1 md:grid-cols-3">
           {notes.map(note => (
             <div className="p-3">
            <NotesCard note={note} setNotes={setNotes}/>
             {console.log(note)}
            </div>
          ))}
        </div>}
    </div>
  )
}

export default Homepage