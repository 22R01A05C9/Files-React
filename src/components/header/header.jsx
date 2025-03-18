import "./header.css"
import SwitchTheme from "../switchtheme/switchtheme"
function Header() {
    return (
        <header>
            <h3><a href="/">File Share</a></h3>
            <div className="wrapper">
                <SwitchTheme />
            </div>
        </header>
    )
}


export default Header;