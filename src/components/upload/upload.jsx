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
    const [uploadeddata,setuploadeddata] = useState(null)

    const uploaded = (res, ccinput, ccchecked, dod) => {
        toast.success("File Uploaded Succesfully!!")
        ccinput.value = ""
        ccinput.classList.remove("green")
        ccinput.classList.remove("red")
        ccchecked.checked = false
        dod.checked = false
        setccodestatus(false)
        document.querySelector(".output").classList.remove("disnone")
        document.querySelector(".options").classList.add("disnone")
        document.querySelector(".upload .submit").classList.add("disnone")
        setuploadeddata(res)
    }
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
            setper(parseInt(e.loaded/e.total * 100))
        })
        xhr.send(formdata)
        xhr.onload = () => {
            let res = JSON.parse(xhr.response)
            if(res.status){
                uploaded(res, ccinput, ccchecked, dod)
            }else{
                toast.error(res.message)
            }
        }
    }
    return(
        <div className="upload">
            <Img setFile={setFile} setper={setper}/>
            <Status file={file} pos={per}/>
            <Options setccodestatus={setccodestatus}/>
            <Submit submit={submit}/>
            <Output data={uploadeddata}/>
        </div>
    )
}

export default Upload