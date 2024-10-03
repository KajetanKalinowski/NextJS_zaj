'use client'
import { useState } from "react";
export default function Page(){
    const [cos,setCos]= useState(0)
    const handleClick = () => (
        setCos(cos + 1)
    )
    return(
        <div>
        <h1>{cos}</h1>
        <button className="border" onClick={handleClick}>+1</button>
        </div>
    );
}