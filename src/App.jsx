import { Suspense, lazy, useEffect, useState } from "react"
import "./App.css"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Mainbody from "./components/main/mainbody"
import Loading from "./components/loading/loading"
const Choose = lazy(()=>import("./components/choose/choose"))
const Feedback = lazy(()=>import("./components/feedback/feedback"))

function App() {
	const [showchoose, setshowchoose] = useState(window.matchMedia("(max-width: 749px)").matches)
    const [choose,setchoose] = useState("Download")

	useEffect(()=>{
		window.addEventListener("resize",()=>{
			setshowchoose(window.matchMedia("(max-width: 749px)").matches)
		})
	},[])
	return (
		<Suspense fallback={<Loading />}>
			<div className="fileshare">
				<div className="main">
					<Header />
					{showchoose ? <Choose setchoose={setchoose}/> : null}
					<Mainbody showchoose={showchoose} choose={choose}/>
				</div>
				<Footer />
			</div>
			{localStorage.getItem("filesfeedback") === null ? <Feedback application="files" /> : null}
		</Suspense>

	)
}

export default App