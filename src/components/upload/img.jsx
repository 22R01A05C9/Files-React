import fileimg from "../../assets/fileupload.png"
import { toast } from "react-toastify";

function Img({ setFile, setper }) {
    const uploadedfile = (e) => {
        if ((e.target.files[0].size / 1000) > 25000) {
            toast.error("File Size Exceeded")
            return
        } else {
            document.querySelector(".upload .options").classList.remove("disnone")
            document.querySelector(".upload .img").classList.add("less")
            document.querySelector(".upload .status").classList.remove("disnone")
            document.querySelector(".upload .submit").classList.remove("disnone")
            document.querySelector(".upload .output").classList.add("disnone")
            setFile(e.target.files[0])
            setper(0)
        }
    }
    return (
        <div className="img" onClick={() => document.querySelector(".img input").click()}>
            <img src={fileimg} alt="File upload image" />
            <p>Click Here To Upload A File</p>
            <p>Max File Size: 25MB</p>
            <input onChange={uploadedfile} type="file" name="uploadedfile" />
        </div>
    )
}

export default Img