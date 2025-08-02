import React from 'react'
import Navbar from '../compnents/Navbar'
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {Toaster,toast} from 'react-hot-toast'
import { ArrowLeftIcon, SendToBack, StepBackIcon } from 'lucide-react'
import { api } from '../lib/axios'


const CreatePage = () => {
  const [title,setTitle]= useState("")
  const [content,setContent]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const handleSubmit =async (e)=>{
    e.preventDefault();
    console.log(title)
    console.log(content)

    if(!title.trim() || !content.trim()){
       toast.error("Fill the fields")
    }else{
      try{
      let res = await api.post('/route',{title,content})
      console.log(res)
      toast.success("Note Created")
      }catch(err){
        toast.error("Error occured")
        console.log(err)
      }
      navigate('/')
    }
  }
  return (
    <div className="flex flex-col mt-3 pl-3 pr-3 items-center">
      <div className="w-full">
      <div className="bg-primary w-30 p-3 pl-4 pr-4 rounded-[20px]">
        <Link to="/" className=" flex justify-between">
          <ArrowLeftIcon/>
          <span>Go Back</span>
        </Link>
      </div>
      </div>

     
      <form onSubmit={handleSubmit} className="bg-black rounded-[20px] p-5 text-white md:w-1/2">
        <div className="font-bold text-lg text-primary">Create New Note</div>
         <div>
            <label >Title</label>
            <input type="text" 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            placeholder='Note Title....'
            className="border-primary border-2 h-10 w-full rounded-full p-1.5 text-white"/>
         </div>
          <div>
            <label >Content</label>
            <textarea 
            value={content}
            onChange={e=>setContent(e.target.value)}
            placeholder='Write your note here .....'
            className="border-primary border-2 h-32 w-full rounded-lg p-4"/>
         </div>
         <div className="flex justify-end">
           <button
        className="bg-white text-black pl-2 pr-2 pt-1 pb-1 rounded-lg"
            type="submit">{!loading ? "Create":"Creating..."}</button>
         </div>
      </form>
    </div>
  )
}

export default CreatePage