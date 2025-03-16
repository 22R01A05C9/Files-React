import "./mainbody.css"
import Upload from "../upload/upload";
import Download from "../download/download";
import { ToastContainer } from "react-toastify";
function Mainbody({showchoose, choose}){
    return(
        <div className="files">
            <ToastContainer />
            {showchoose == true ? choose == "Download" ? <Download /> : null : <Download />}
            {showchoose == true ? choose == "Upload" ? <Upload /> : null : <Upload />}
            
        </div>
    )
}

export default Mainbody;