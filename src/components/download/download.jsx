import "./download.css"
import Cinput from "../cinput"
function Download(){
    return(
        <div className="download">
            <h3>Download</h3>
            <p>Enter Code To Download File</p>
            <Cinput />
            <div className="submit">
                <button disabled>Download</button>
            </div>
        </div>
    )
}

export default Download