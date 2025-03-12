import fileimg from "../../assets/fileupload.png"
import { toast } from "react-toastify";
function Img() {
    const uploadedfile = (e) => {
        console.log(e)
        if((e.target.files[0].size/1000) > 25000){
            toast.error("File Size Exceeded")
            return
        }else{
            document.querySelector(".upload .options").classList.add("visible")
        }
    }
    return (
        <div className="img" onClick={()=>document.querySelector(".img input").click()}>
            <img src={fileimg} alt="File upload image" />
            <p>Click Here To Upload A File</p>
            <p>Max File Size: 25MB</p>
            <input onChange={uploadedfile} type="file" name="uploadedfile" />
        </div>
    )
}

export default Img