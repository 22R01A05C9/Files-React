function Options() {
    return (
        <div className="options">
            <div className="ccode">
                <input type="checkbox" id="ccodeo" />
                <p>Click To Set Custom Code</p>
                <input type="number" id="ccode" placeholder="Enter Custom Code" />
            </div>
            <div className="dod">
                <input type="checkbox" id="dod" />
                <p>Check To Delete The File Once Downloaded</p>
            </div>
        </div>
    )
}

export default Options