import Toast from "../../helpers/toast";
function Cinput({submit}){
    const paste = (e)=>{
        let data = e.clipboardData.getData("text");
        let exp = /^[0-9]{4}$/;
        if(exp.test(data)){
            let inputs = document.querySelectorAll(".download .dinput input")
            inputs.forEach((input, index)=>{
                input.value = data[index]
                if(index < 3){
                    input.disabled = true
                    inputs[index+1].disabled = false
                    inputs[index+1].focus()
                }
            })
        }else{
            Toast("Pasting Invalid Code","warn",localStorage.getItem("theme") || "dark")
            e.preventDefault()
        }        
    }
    const inp = (e)=>{
        document.querySelector(".download .submit button").disabled = true
        let value = e.target.value.trim()
        let length = value.length
        if(length == 0) return;
        if(length > 1){
            e.target.value = value.slice(length-1,length)
        }
        let next = e.target.nextSibling
        if(next){
            e.target.disabled = true
            next.disabled = false
            next.focus()
        }else{
            document.querySelector(".download .submit button").removeAttribute("disabled")
        }
    }
    const kdown = (e)=>{
        if(e.key == "Backspace"){
            document.querySelector(".download .submit button").disabled = true
            if(e.target.value){
                e.target.value="";
                return;
            }
            let prev = e.target.previousSibling
            if(prev){
                e.target.disabled = true
                prev.disabled = false
                prev.focus()
            }
        }else if(e.key == "Enter" && document.querySelector(".download .submit button").disabled == false){
            submit()
        }
    }
    return(
        <div className="dinput">
            <input type="number" name="i1" onInput={inp} onKeyDown={kdown} onPaste={paste}/>
            <input type="number" name="i2" onInput={inp} onKeyDown={kdown} disabled onPaste={paste}/>
            <input type="number" name="i3" onInput={inp} onKeyDown={kdown} disabled onPaste={paste}/>
            <input type="number" name="i4" onInput={inp} onKeyDown={kdown} disabled onPaste={paste}/>
        </div>
    )
}

export default Cinput