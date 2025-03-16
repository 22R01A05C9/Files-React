import "./upload.css"
import Img from "./img"
import Status from "../status/status"
import Options from "./options"
import Submit from "./submit"
import Output from "./output"
import { useRef, useState } from "react"
import Toast from "../../helpers/toast";

function Upload({ choose }) {
    const fileRef = useRef(null)
    const ccRef = useRef(null)
    const dodRef = useRef(null)
    const [file, setFile] = useState(null)
    const [ccodestatus, setccodestatus] = useState(false)
    const [uper, setuper] = useState("0%")
    const [uploading, setUploading] = useState(false)
    const [output, setOutput] = useState(null)
    const uploaded = (res, ccinput, ccchecked, dod) => {
        Toast("File Uploaded Succesfully!!", "success", localStorage.getItem("theme") || "dark")
        ccinput.value = ""
        ccinput.classList.remove("green")
        ccinput.classList.remove("red")
        ccchecked.checked = false
        dod.checked = false
        setccodestatus(false)
        let link = window.location.origin + "/api/files/download/" + res.str
        setOutput({id:res.id, link:link})
        setUploading(false)
    }
    const submit = () => {
        let ccinput = ccRef.current.querySelector("#ccode")
        let ccchecked = ccRef.current.querySelector("#ccodeo")
        let dod = dodRef.current.querySelector("#dod")
        let size = parseFloat(file.size/1000000).toFixed(2).toString() + " MB"
        if (file === null) {
            Toast("No File Selected", "error", localStorage.getItem("theme") || "dark")
            return;
        }
        if (ccchecked.checked && !ccodestatus) {
            Toast("Custom Code Not Verified !!", "error", localStorage.getItem("theme") || "dark")
            ccinput.focus()
            ccinput.classList.add("red")
            return;
        }
        let formdata = new FormData()
        formdata.append("file", file)
        formdata.append("customstatus", ccchecked.checked)
        formdata.append("deleteondownload", dod.checked)
        formdata.append("size", size)
        if (ccchecked.checked) formdata.append("customid", ccinput.value)
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/files/upload")
        xhr.upload.addEventListener("progress", (e) => {
            let per = parseInt(e.loaded / e.total * 100)
            setuper(`${per}%`)
        })
        xhr.send(formdata)
        setUploading(true)
        xhr.onload = () => {
            let contenttype = xhr.getResponseHeader("Content-Type")
            if (contenttype.includes("application/json")) {
                let res = JSON.parse(xhr.response)
                if (res.status) {
                    uploaded(res, ccinput, ccchecked, dod)
                } else {
                    Toast(res.message, "error", localStorage.getItem("theme") || "dark")
                }
            } else {
                Toast("Please Try Again!!", "error", localStorage.getItem("theme") || "dark")
            }
        }
    }
    return (
        <div className={"upload" + (choose === "Upload" ? "" : " disnone")}>
            <Img fileref={fileRef} setFile={setFile} less={file !== null} setper={setuper} uploading={uploading} setuploading={setUploading} setoutput={setOutput}/>
            {
                file === null ? file :
                    <div className="file">
                        <Status file={file} per={uper} />
                        {uploading || output !== null ? null : <Options setccodestatus={setccodestatus} ccref={ccRef} dodref={dodRef} ccodestatus={ccodestatus}/>}
                        {uploading || output !== null ? null : <Submit submit={submit} />}
                        { output === null ? output : <Output data={output}/>}
                    </div>
            }


        </div>
    )
}

export default Upload