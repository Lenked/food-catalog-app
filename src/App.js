// views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
    {/* Header Area */}
			<div className="max-w-full">
				<Header />
			</div>
			{/* Route Area */}
			<Routes>
				<Route element={<Home />} exact path="/" />
				<Route element={<About />} path="/About" />
				<Route element={<Foods />} path="/Foods" />
				<Route element={<FilteredFoods />} path="/FilteredFoods/:slug" />
			</Routes>
      {/* Footer Area */}
			<div className="max-w-full">
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;