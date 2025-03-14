import fileimg from "../../assets/fileupload.png"
import Toast from "../../helpers/toast";

function Img({ setFile }) {
    const uploadedfile = (e) => {
        if ((e.target.files[0].size / 1000) > 25000) {
            Toast("File Size Exceeded","error",localStorage.getItem("theme") || "dark")
            return
        } else {
            document.querySelector(".upload .options").classList.remove("disnone")
            document.querySelector(".upload .img").classList.add("less")
            document.querySelector(".upload .status").classList.remove("disnone")
            document.querySelector(".upload .submit").classList.remove("disnone")
            document.querySelector(".upload .output").classList.add("disnone")
            setFile(e.target.files[0])
            document.querySelector(".upload .status .inner").style.width = "0%"
            document.querySelectorAll(".output .buttons button").forEach((item)=>{
                console.log(item);
                item.removeAttribute("aria-data")
            })
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