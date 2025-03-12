import "./download.css"
import Cinput from "./cinput";
import { useEffect } from "react";
function Download(){
    const download = ()=>{
        console.log("downlad");
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