import "./App.css";
import RouterProvider from "./routes/routes";
import NavContextProvider from "./context/navContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
	return (
		<NavContextProvider >
			<RouterProvider />
		</NavContextProvider>
	);
}

export default App;
