import "./download.css"
import Cinput from "./cinput";
import { useEffect } from "react";
import { AES } from "crypto-js";
import { toast } from "react-toastify";

function Download(){
    const download = ()=>{
        let inputs = document.querySelectorAll(".download .dinput input")
        let code = ""
        inputs.forEach((input)=>{
            code += input.value
        })
        let exp = /^[0-9]{4}$/
        if(!exp.test(code)){
            toast.error("Invalid Code")
            return;
        }
        let data = JSON.stringify({id:code})
        let token = AES.encrypt(data, import.meta.env.VITE_FILES_API_KEY).toString()
        fetch("/api/files/download",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({token:token})
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data.status){
                let redirect = data.redirect
                redirect = window.location.origin + "/api" + redirect
                let a = document.createElement("a")
                a.href = redirect
                a.click()
            }else{
                toast.error(data.message)
            }
        })
    }
    useEffect(()=>{
        document.querySelector(".download .submit button").addEventListener("click",download)
        document.querySelector(".download .dinput input").focus()
    },[])
    return(
        <div className="download">
            <h3>Download</h3>
            <p>Enter Code To Download File</p>
            <Cinput submit={download}/>
            <div className="submit">
                <button disabled>Download</button>
            </div>
        </div>
    )
}

export default Download