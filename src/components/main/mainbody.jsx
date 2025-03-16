import "./mainbody.css"
import Upload from "../upload/upload";
import Download from "../download/download";
import { ToastContainer } from "react-toastify";
function Mainbody({showchoose, choose}){
    return(
        <div className="files">
            <ToastContainer />
            {showchoose == true ? <Download choose={choose}/> : <Download choose={"Download"}/>}
            {showchoose == true ? <Upload choose={choose}/> : <Upload choose={"Upload"}/>}
        </div>
    )
}

export default Mainbody;