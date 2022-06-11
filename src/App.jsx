import { Routes, Route, NavLink } from 'react-router-dom';

import './App.css';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
