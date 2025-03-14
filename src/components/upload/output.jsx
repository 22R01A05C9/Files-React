import { toast } from "react-toastify";

function Output({ data }) {
    const code = () => {
        navigator.clipboard.writeText(data?.id);
        toast.success("Code Copied To Clipboard")
    }
    const link = () => {
        navigator.clipboard.writeText(window.location.origin + "/api/files/download/" + data?.str);
        toast.success("Link Copied To Clipboard")
    }
    return (
        <div className="output disnone">
            <p>File Has Been Uploaded Successfully!!</p>
            <p>Your Code is <strong>{data?.id}</strong></p>
            <div className="buttons">
                <button onClick={code}>Copy Code</button>
                <button onClick={link}>Copy Link</button>
            </div>

        </div>
    )
}

export default Output
