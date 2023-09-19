// Import from node_modules
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components from other files
import TodoApp from "./components/TodoApp";
import AboutPage from "./components/AboutPage";

// Create a functional component
const App = () => {
	return (
		<>
			{/* Wrap Routes with a BrowserRouter and Routes */}
			<BrowserRouter>
				<Routes>
					{/* Define Route and the component they render */}
					<Route path="/" element={<TodoApp />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
// Export default means you only want to export one value from this file
export default App;
