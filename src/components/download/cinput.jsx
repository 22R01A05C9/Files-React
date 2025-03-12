function Cinput({submit}){
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
            <input type="number" name="i1" onInput={inp} onKeyDown={kdown}/>
            <input type="number" name="i2" onInput={inp} onKeyDown={kdown} disabled/>
            <input type="number" name="i3" onInput={inp} onKeyDown={kdown} disabled/>
            <input type="number" name="i4" onInput={inp} onKeyDown={kdown} disabled/>
        </div>
    )
}

export default Cinput