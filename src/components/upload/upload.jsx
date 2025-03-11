import "./upload.css"
import fileimg from "../../assets/fileupload.png"

function Upload(){
    return(
        <div className="upload">
            <div className="img">
                <img src={fileimg} alt="File upload image" />
                <p>Click Here To Upload A File</p>
                <input type="file" name="uploadedfile" />
            </div>
            <div className="status">
                <div className="info">
                    <p>File Name</p>
                    <p>Size</p>
                </div>
                <div className="progressouter">
                    <div className="inner"></div>
                </div>
            </div>
            <div className="ccode">
                <input type="checkbox" id="ccodeo"/>
                <p>Click To Set Custom Code</p>
                <input type="number" id="ccode" placeholder="Enter Custom Code"/>
            </div>
            <div className="submit">
                <button>Upload</button>
            </div>
            <div className="output">
                <p>File Has Been Uploaded Successfully!!</p>
                <p>Your Code is <strong>3456</strong></p>
            </div>
        </div>
    )
}

export default Upload