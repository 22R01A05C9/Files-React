import "./upload.css"
import Img from "./img"
import Status from "./status"
import Options from "./options"
import Submit from "./submit"
import Output from "./output"
function Upload(){
    return(
        <div className="upload">
            <Img />
            <Options />
            <Submit />
        </div>
    )
}

export default Upload