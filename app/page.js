"use client"
import React,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}]);
    settitle("")
    setdesc("")
    consolelog(mainTask)
  };

  const deleteHandler=(i)=>{
    let copytask=[...mainTask]

    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let rendertask=<h2>No Task Available</h2>;
  if(mainTask.length>0){
    rendertask=mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
        <h4 className='text-2xl font-semibold'>{t.title}</h4>
        <h5 className='text-xl font-semibold'>{t.desc}</h5>
      </div>
      <button 
      onClick={()=>{deleteHandler(i)}}
      className='bg-red-600 text-white rounded font-bold p-3'>Delete</button>
        </li>
      )
    })
  }
  
  return (
    <>
    <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>Gunjan's Todo List</h1>
  
    <form className='text-center ' onSubmit={submitHandler}>
      <input type='text' className='text-2xl text-center border-zinc-800 border-4 m-5 p-4 ' placeholder='Enter Title here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}></input><br/>
      <input type='text' className='text-2xl text-center  border-zinc-800 border-4 m-5 p-4 ' placeholder='Enter Description here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}></input><br/>
      <button className='bg-black text-white p-4 text-2xl font-bold rounded' >Add Task</button>
    </form>

    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>

    </div>
    </>
  )
}

export default page