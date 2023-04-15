import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import LoginPage from "./components/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/checkout"
						element={
							<>
								{<Header />}

								{<Checkout />}
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								{<Header />}
								{<Home />}
							</>
						}
					/>
					<Route
					path="/login"
					element={
						<LoginPage/>}
						/>
					
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
