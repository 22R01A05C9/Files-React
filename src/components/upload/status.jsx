function Status({file}) {
    let name,size;
    let fileinp = document.querySelector(".img input")

    if(file){
        if(file.name.length > 16){
            let l = file.name.length
            name = file.name.slice(0,10) + "....." + file.name.slice(l-5,l)
        }else{
            name = file.name
        }
        size = parseFloat(file.size/1000000).toFixed(2).toString() + " MB"
        }

    return (
        <div className="status disnone">
            {file && 
                <div className="info">
                    <p><strong>File:</strong> {name}</p>
                    <p><strong>Size:</strong> {size}</p>
                </div>}

            
            <div className="progressouter">
                <div className="inner"></div>
            </div>
        </div>
    )
}

export default Status