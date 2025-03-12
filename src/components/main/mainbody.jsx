import "./mainbody.css"
import Upload from "../upload/upload";
import Download from "../download/download";
import { ToastContainer } from "react-toastify";
function Mainbody(){
    return(
        <div className="files">
            <ToastContainer />
            <Download />
            <Upload />
        </div>
    )
}

export default Mainbody;