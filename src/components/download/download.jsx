import "./download.css"

function Download(){
    return(
        <div className="download">
            <h3>Download</h3>
            <p>Enter Code To Download File</p>
            <div className="dinput">
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
            </div>
            <div className="submit">
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Download