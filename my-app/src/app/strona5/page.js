'use client'
import { useState } from "react"
export default function Page(){
    const [list,setList] = useState([])
    const [input,setInput] = useState([])
    const handleClick = () => {
        setList([...list,input])
        setInput('')
        console.log(...list)

    }
    return(
        <div className="flex items-center flex-col">
            <input className="border-2 border-black" type="text" value={input} onChange={(e)=> setInput(e.target.value)}></input>
            <button className="border" onClick={handleClick}>Dodaj</button>
            <ul className="list-disc">
            {
        list.map((items,idx)=>(
            <li key={idx}>{items}</li>
        ))}
            </ul>
        </div>
    )
}