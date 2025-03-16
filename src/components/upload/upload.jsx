import "./upload.css"
import Img from "./img"
import Status from "../status/status"
import Options from "./options"
import Submit from "./submit"
import Output from "./output"
import { useState } from "react"
import Toast from "../../helpers/toast";

function Upload(){
    const [file,setFile] = useState(null)
    const [ccodestatus,setccodestatus] = useState(false)

    const uploaded = (res, ccinput, ccchecked, dod) => {
        Toast("File Uploaded Succesfully!!","success",localStorage.getItem("theme") || "dark")
        ccinput.value = ""
        ccinput.classList.remove("green")
        ccinput.classList.remove("red")
        ccchecked.checked = false
        dod.checked = false
        setccodestatus(false)
        document.querySelector(".output").classList.remove("disnone")
        document.querySelector(".options").classList.add("disnone")
        document.querySelector(".upload .submit").classList.add("disnone")
        let output = document.querySelector(".output")
        output.querySelector(".showcode strong").innerHTML = res.id
        output.querySelector(".buttons button:nth-child(1)").setAttribute("aria-data", res.id)
        let link = window.location.origin + "/api/files/download/" + res.str
        output.querySelector(".buttons button:nth-child(2)").setAttribute("aria-data", link)
    }
    const submit = () =>{
        let fileinp = document.querySelector(".img input")
        let ccchecked = document.querySelector(".ccode .chead input")
        let ccinput = document.querySelector(".ccode #ccode")
        let dod = document.querySelector(".dod input")
        let size = document.querySelector(".info p:nth-child(2)").innerHTML.slice(23,)
        if(fileinp.files.length == 0){
            Toast("No File Selected","error",localStorage.getItem("theme") || "dark")
            return;
        }
        if(ccchecked.checked && !ccodestatus){
            Toast("Custom Code Not Verified !!","error",localStorage.getItem("theme") || "dark")
            ccinput.focus()
            ccinput.classList.add("red")
            return;
        }
        let formdata = new FormData()
        formdata.append("file",fileinp.files[0])
        formdata.append("customstatus", ccchecked.checked)
        formdata.append("deleteondownload", dod.checked)
        formdata.append("size", size)
        if(ccchecked.checked) formdata.append("customid", ccinput.value)
        let xhr = new XMLHttpRequest();
        xhr.open("POST","/api/files/upload")
        xhr.upload.addEventListener("progress", (e)=>{
            let per = parseInt(e.loaded/e.total * 100).toString()
            document.querySelector(".upload .progressouter .inner").style.width = `${per}%`
        })
        xhr.send(formdata)
        xhr.onload = () => {
            let contenttype = xhr.getResponseHeader("Content-Type")
            if(contenttype.includes("application/json")){
                let res = JSON.parse(xhr.response)
                if(res.status){
                    uploaded(res, ccinput, ccchecked, dod)
                }else{
                    Toast(res.message,"error",localStorage.getItem("theme") || "dark")
                }
            }else{
                Toast("Please Try Again!!", "error", localStorage.getItem("theme") || "dark")
            }
        }
    }
    return(
        <div className="upload">
            <Img setFile={setFile}/>
            <div className="file">
                <Status file={file}/>
                <Options setccodestatus={setccodestatus}/>
                <Submit submit={submit}/>
                <Output />
            </div>
            
        </div>
    )
}

export default Upload