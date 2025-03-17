import { copy } from "../../hooks/output";

function Output({data}) {
    return (
        <div className="output">
            <p>File Has Been Uploaded Successfully!!</p>
            <p className="showcode">Your Code is <strong>{data.id}</strong></p>
            <div className="buttons">
                <button onClick={(e)=>{copy(e,data)}}>Copy Code</button>
                <button onClick={copy}>Copy Link</button>
            </div>

        </div>
    )
}

export default Output
