function Options() {
    const clickedoptions = () => {
        let ccode = document.querySelector(".ccode"), dod = document.querySelector(".dod"), svg = document.querySelector(".optionstitle svg");
        if (ccode.classList.contains("disnone")) {
            ccode.classList.remove("disnone")
            dod.classList.remove("disnone")
            svg.classList.remove("normal")
        } else {
            ccode.classList.add("disnone")
            dod.classList.add("disnone")
            svg.classList.add("normal")
        }
    }
    return (
        <div className="options disnone">
            <div className="optionstitle" onClick={clickedoptions}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                <p>Options</p>
            </div>
            <div className="ccode">
                <div className="chead">
                    <input type="checkbox" id="ccodeo" />
                    <label htmlFor="ccodeo">Click To Set Custom Code</label>
                </div>
                <input type="number" id="ccode" placeholder="Enter Custom Code" className="disnone" />
            </div>
            <div className="dod">
                <input type="checkbox" id="dod" />
                <label htmlFor="dod">Check To Delete The File Once Downloaded</label>
            </div>
        </div>
    )
}

export default Options