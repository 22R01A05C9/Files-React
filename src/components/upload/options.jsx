import Toast from "../../helpers/toast";

function Options({setccodestatus}) {
    const ccodeinp = (e)=>{
        e.target.classList.remove("red")
        e.target.classList.remove("green")
        setccodestatus(false)
    }
    const verifycc = () => {
        let ccode = document.querySelector("#ccode");
        let regexp = /^[0-9]{4}$/;
        let code = ccode.value;
        if(!regexp.test(code)){
            Toast("Invalid Code","error")
            ccode.classList.add("red")
            return;
        }
        fetch("/api/files/cverify",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                ccode:code
            })
        }).then(res=>res.json()).then((res)=>{
            setccodestatus(res.status)
            if(res.status === false){
                Toast(res.message,"warn");
                ccode.classList.add("red")
                ccode.classList.remove("green")
            }else{
                Toast(res.message,"success")
                ccode.classList.remove("red")
                ccode.classList.add("green")
            }
        })
    }
    const clickedoptions = () => {
        let options = document.querySelector(".optionstitle"), svg = options.querySelector("svg");
        if (options.classList.contains("show")) {
            options.classList.remove("show")
            svg.classList.add("normal")
        } else {
            options.classList.add("show")
            svg.classList.remove("normal")
        }
    }
    return (
        <div className="options disnone">
            <div className="optionstitle show" onClick={clickedoptions}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                <p>Options</p>
            </div>
            <div className="ccode">
                <div className="chead">
                    <input type="checkbox" id="ccodeo" />
                    <label htmlFor="ccodeo">Click To Set Custom Code Of 4 Digits</label>
                </div>
                <div className="cbody">
                    <input onInput={ccodeinp} type="number" id="ccode" placeholder="Enter Custom Code" />
                    <button onClick={verifycc}>Verify</button>
                </div>
            </div>
            <div className="dod">
                <input type="checkbox" id="dod" />
                <label htmlFor="dod">Check To Delete The File Once Downloaded</label>
            </div>
        </div>
    )
}

export default Options