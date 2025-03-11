import "./mainbody.css"
import Upload from "../upload/upload";
import Download from "../download/download";
function Mainbody(){
    return(
        <div className="files">
            <Download />
            <Upload />
            
        </div>
    )
}

export default Mainbody;