'use client'
import { useState } from "react";
export default function Page(){
    const [text,setText] = useState('')
    const [tekst,setTekst] = useState('')
    const handleClick = () => {
        setText(tekst)
        setTekst("")
    }

    return(
        <div>
        <input value={tekst} type="text" placeholder="Wpisz" onChange={(e)=>setTekst(e.target.value)}></input>
        <h1>{text}</h1>
        <button className="border" onClick={handleClick}>Wprowadz</button>
        </div>
    );
}