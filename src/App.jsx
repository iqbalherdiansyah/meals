import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Meals from "./pages/Meals";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/meals/:listId" element={<Meals />} />
			</Routes>
		</>
	);
}

export default App;
