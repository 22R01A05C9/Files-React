import "./download.css"
import Cinput from "./cinput";
import Status from "../status/status";
import { useEffect } from "react";
import { AES } from "crypto-js";
import Toast from "../../helpers/toast";

function Download(){
    const download = ()=>{
        let inputs = document.querySelectorAll(".download .dinput input")
        let code = ""
        inputs.forEach((input)=>{
            code += input.value
        })
        let exp = /^[0-9]{4}$/
        if(!exp.test(code)){
            Toast("Invalid Code","error",localStorage.getItem("theme") || "dark")
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
                document.querySelector(".download .status").classList.remove("disnone")
                document.querySelectorAll(".download .dinput input").forEach((input)=>{
                    input.disabled = true 
                })
                let redirect = data.redirect
                redirect = window.location.origin + "/api" + redirect
                let xhr = new XMLHttpRequest()
                xhr.open("GET", redirect)
                xhr.responseType = "blob"
                xhr.send()
                xhr.onprogress = (e)=>{
                    let per = parseInt(e.loaded/e.total * 100).toString()
                    document.querySelector(".download .status .progressouter .inner").style.width = `${per}%`
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
                    document.querySelector(".download .dinput input").disabled = false

                }
            }else{
                Toast(data.message,"error",localStorage.getItem("theme") || "dark")
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
            <p className="desc">Enter Code To Download File</p>
            <Cinput submit={download}/>
            <div className="submit">
                <button disabled>Download</button>
            </div>
            <Status file={{name:"indes.js",size:"0.02 MB"}}/>
        </div>
    )
}

export default Download