"use client";
import { useState,useEffect } from "react";
import Card from "../components/Card";
export default function Page() {
    const [fruit, setfruit] = useState("banana");
    const setapple = () => {
        setfruit("Apple");
    }
    const setorange = () => {
        setfruit("Orange");
    }
    const setbanana = () => {
setfruit("Banana");}   

useEffect(() => {
    document.title = `My favorite fruit is ${fruit}`
}) 

    return (
        <div>
   <h1 className="text-3xl text-center">{fruit}</h1>

    <button onClick={setapple}>Apple</button><br />
    <button onClick={setorange}>Orange</button><br />
    <button onClick={setbanana}>Banana</button><br />
   
    <Card src="/img1.jpg" title="sungihun" />
   <Card src="/img2.jpg" title="Trump" />
   
   
        </div>
    );
}