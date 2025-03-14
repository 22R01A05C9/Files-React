import "./upload.css"
import Img from "./img"
import Status from "./status"
import Options from "./options"
import Submit from "./submit"
import Output from "./output"
import { useState } from "react"
import { toast } from "react-toastify"

function Upload(){
    const [file,setFile] = useState(null)
    const [ccodestatus,setccodestatus] = useState(false)
    const [per,setper] = useState(0)
    const submit = () =>{
        let fileinp = document.querySelector(".img input")
        let ccchecked = document.querySelector(".ccode .chead input")
        let ccinput = document.querySelector(".ccode #ccode")
        let dod = document.querySelector(".dod input")
        if(fileinp.files.length == 0){
            toast.error("No File Selected")
            return;
        }
        if(ccchecked.checked && !ccodestatus){
            toast.error("Custom Code Not Verified !!")
            ccinput.focus()
            ccinput.classList.add("red")
            return;
        }
        let formdata = new FormData()
        formdata.append("file",fileinp.files[0])
        formdata.append("customstatus", ccchecked.checked)
        formdata.append("deleteondownload", dod.checked)
        if(ccchecked.checked) formdata.append("customid", ccinput.value)
        let xhr = new XMLHttpRequest();
        xhr.open("POST","/api/files/upload")
        xhr.upload.addEventListener("progress", (e)=>{
            let per = parseInt(e.loaded/e.total * 100)
            console.log(per);
            setper(per)
        })
        xhr.send(formdata)
        xhr.onload = () => {
            let res = JSON.parse(xhr.response)
            if(res.status){
                console.log();
                toast.success("File Uploaded Succesfully!!")
                setFile(null)
                ccinput.value = ""
                ccinput.classList.remove("green")
                ccinput.classList.remove("red")
                ccchecked.checked = false
                dod.checked = false
                setccodestatus(false)
            }
        }
    }
    return(
        <div className="upload">
            <Img setFile={setFile}/>
            <Status file={file} pos={per}/>
            <Options setccodestatus={setccodestatus}/>
            <Submit submit={submit}/>
        </div>
    )
}

export default Upload