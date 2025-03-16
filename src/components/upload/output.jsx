import Toast from "../../helpers/toast";

function Output({data}) {
    function copytext(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy"); // Fallback for older browsers
        document.body.removeChild(textarea);
    }
    const copy = (e) => {
        let item = e.target.innerHTML.slice(5,9)
        let copydata = (item === "Code" ? data.id : data.link)
        if(!navigator.clipboard) copytext(copydata);
        else navigator.clipboard.writeText(copydata);
        Toast(`${item} Copied To Clipboard`,"success",localStorage.getItem("theme") || "dark")
    }
    return (
        <div className="output">
            <p>File Has Been Uploaded Successfully!!</p>
            <p className="showcode">Your Code is <strong>{data.id}</strong></p>
            <div className="buttons">
                <button onClick={copy}>Copy Code</button>
                <button onClick={copy}>Copy Link</button>
            </div>

        </div>
    )
}

export default Output
