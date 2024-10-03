'use client'
import { useState } from "react";
export default function Page(){
    const [color,setColor]= useState("bg-green-500")
    const handleClick = () => (
        setColor(color == "bg-green-500"? "bg-red-500" : "bg-green-500")
    )
    return(
        <div className={` h-screen ${color}`}>
        <button className="border" onClick={handleClick}>Kolor</button>
        </div>
    );
}