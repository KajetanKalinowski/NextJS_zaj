'use client'
import { useState } from "react";
export default function Page(){
    const [s,setS]= useState("Start")
    const changeS = () => {
        // if(s == "Start"){
        //     setS("Stop")
        // }else{
        //     setS("Start")
        // }
        setS(s == "Start"? "Stop" : "Start")
    }
    return(
        <div className="gap-20 border-black ">
        <h1>{s}</h1>
        <button className="border" onClick={changeS}>tak</button>
        </div>
    );
}