import "./App.css";
import RouterProvider from "./routes/routes";
import NavContextProvider from "./context/navContext";

function App() {
	return (
		<NavContextProvider >
			<RouterProvider />
		</NavContextProvider>
	);
}

export default App;
