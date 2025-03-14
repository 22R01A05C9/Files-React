import Toast from "../../helpers/toast";

function Output() {
    function copytext(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy"); // Fallback for older browsers
        document.body.removeChild(textarea);
    }
    const copy = (e) => {
        let copydata = e.target.getAttribute("aria-data")
        if(!navigator.clipboard) copytext(copydata);
        else navigator.clipboard.writeText(copydata);
        Toast(e.target.innerHTML.slice(-1,-4) + " Copied To Clipboard","success",localStorage.getItem("theme") || "dark")
    }
    return (
        <div className="output disnone">
            <p>File Has Been Uploaded Successfully!!</p>
            <p className="showcode">Your Code is <strong></strong></p>
            <div className="buttons">
                <button onClick={copy}>Copy Code</button>
                <button onClick={copy}>Copy Link</button>
            </div>

        </div>
    )
}

export default Output
