import Toast from "../../helpers/toast";

function Output({ data }) {
    const code = () => {
        navigator.clipboard.writeText(data?.id);
        Toast("Code Copied To Clipboard","success")
    }
    const link = () => {
        navigator.clipboard.writeText(window.location.origin + "/api/files/download/" + data?.str);
        Toast("Link Copied To Clipboard","success")
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
