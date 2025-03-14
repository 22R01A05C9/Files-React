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
    const submit = () =>{
        let fileinp = document.querySelector(".img input")
        let cc = document.querySelector(".ccode .chead input").checked
        let cci = document.querySelector(".ccode #ccode")
        let dod = document.querySelector(".dod input").checked
        console.log(cc);
        if(fileinp.files.length == 0){
            toast.error("No File Selected")
            return;
        }
        let exp = /^[0-9]{4}$/
        if(cc && !exp.test(cci.value)){
            toast.error("Custom Code Invalid")
            cci.focus()
            cci.classList.add("red")
            return;
        }
        let formdata = new FormData()
        formdata.append("file",fileinp.files[0])
        formdata.append("ccode", cci.value)

    }
    return(
        <div className="upload">
            <Img setFile={setFile}/>
            <Status file={file} pos={10}/>
            <Options setccodestatus={setccodestatus}/>
            <Submit submit={submit}/>
        </div>
    )
}

export default Upload