import "./download.css"
import Cinput from "./cinput";
import Status from "../status/status";
import { useEffect, useRef, useState } from "react";
import { AES } from "crypto-js";
import Toast from "../../helpers/toast";

function Download(){
    const buttonRef = useRef(null)
    const inputRefs = useRef([])
    const [dper,setdper] = useState("0%")
    const [dfile,setdfile] = useState(false)
    const download = ()=>{
        let code = ""
        inputRefs.current.forEach((input)=>{
            code += input.value
        })
        let exp = /^[0-9]{4}$/;
        if(!exp.test(code)){
            Toast("Invalid Code!", "warn", localStorage.getItem("theme") || "dark")
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
                setdfile(data)
                inputRefs.current.forEach((input)=>{
                    input.disabled = true 
                })
                buttonRef.current.disabled = true
                let redirect = data.redirect
                redirect = window.location.origin + "/api" + redirect
                let xhr = new XMLHttpRequest()
                xhr.open("GET", redirect)
                xhr.responseType = "blob"
                xhr.send()
                xhr.onprogress = (e)=>{
                    let per = parseInt(e.loaded/e.total * 100).toString()
                    setdper(`${per}%`)
                }
                xhr.onload = ()=>{
                    let headers = xhr.getResponseHeader("Content-Type")
                    if(headers.includes("application/json")){
                        Toast("Some Error Occured!!", "error", localStorage.getItem("theme") || "dark")
                        return
                    }
                    let blob = xhr.response
                    let url = URL.createObjectURL(blob)
                    let a = document.createElement("a")
                    a.href = url
                    a.download = data.name
                    a.click()
                    Toast("File Downloaded Successfully", "success", localStorage.getItem("theme") || "dark")
                    document.querySelectorAll(".download .dinput input").forEach((input)=>{
                        input.value = ""
                    })
                    setTimeout(() => {
                        setdper("0%")
                        setdfile(false)
                        inputRefs.current[1].disabled=false
                        inputRefs.current[1].focus()
                        buttonRef.current.disabled = false
                    }, 3000);

                }
            }else{
                Toast(data.message,"error",localStorage.getItem("theme") || "dark")
            }
        })
    }
    useEffect(()=>{
        buttonRef.current.addEventListener("click",download)
        inputRefs.current[1].focus()
    },[])
    return(
        <div className="download">
            <h3>Download</h3>
            <p className="desc">Enter Code To Download File</p>
            <Cinput submit={download} buttonref={buttonRef} inputref={inputRefs} file={dfile}/>
            <div className="submit">
                <button disabled ref={buttonRef}>Download</button>
            </div>
            {dfile ? <Status file={dfile} per={dper}/> : null}
        </div>
    )
}

export default Download