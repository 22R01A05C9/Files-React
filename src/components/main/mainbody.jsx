import "./mainbody.css"
import Upload from "../upload/upload";
import Download from "../download/download";
function Mainbody({ showchoose, choose }) {
    return (
        <div className="files">
            {showchoose == true ? <Download choose={choose} /> : <Download choose={"Download"} />}
            {showchoose == true ? <Upload choose={choose} /> : <Upload choose={"Upload"} />}
        </div>
    )
}

export default Mainbody;