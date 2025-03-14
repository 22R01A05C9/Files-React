import { useEffect } from "react"
import "./choose.css"

function Choose(){
    useEffect(()=>{
        document.querySelector(".download").classList.add("chooseshow")
        const choose = document.querySelectorAll(".choose p")
        choose.forEach((item)=>{
            item.addEventListener("click",()=>{
                choose.forEach((item)=>{
                    item.classList.remove("active")
                })
                item.classList.add("active")
                if(item.innerHTML === "Upload"){
                    document.querySelector(".upload").classList.add("chooseshow")
                    document.querySelector(".download").classList.remove("chooseshow")
                }else{
                    document.querySelector(".upload").classList.remove("chooseshow")
                    document.querySelector(".download").classList.add("chooseshow")
                }
            })
        })
    },[])

    return(
        <div className="choose">
            <p className="active">Download</p>
            <p>Upload</p>
        </div>
    )
}

export default Choose