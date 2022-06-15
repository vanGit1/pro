import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import JSONdata from './MOCK_DATA_IMG.json';

import './App.css';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';

function App() {
	const [users, setUsers] = useState(JSONdata.slice(0, 10));
	const [pageNumber, setPageNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const [cartItems, setCartItems] = useState([]);

	const usersPerPage = 2;
	const pageVisited = pageNumber * usersPerPage;
	const [saveData, setSaveData] = useState('');

	const displayUsers = users
		.slice(pageVisited, pageVisited + usersPerPage)
		.map((user, index) => {
			return (
				<div
					onClick={() => {
						setOpenModal(true);
						setSaveData(user);
					}}
					className="user"
					key={index}
				>
					<h3>{user.firstName}</h3>
					<img src={user.image} />
					<h3>Gender: {user.gender}</h3>
					<h3>Age: {user.age}</h3>
				</div>
			);
		});

	//? add ITEM to cart
	const onAddToCart = (user) => {
	 setCartItems(prev => [...prev, user]);
	};

	const pageCount = Math.ceil(users.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={
							<Home
								setOpenModal={setOpenModal}
								dataProps={saveData}
								openModal={openModal}
								pageCount={pageCount}
								displayUsers={displayUsers}
								changePage={changePage}
								saveData={saveData}
								onAddToCart={onAddToCart}
							/>
						}
					/>
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/cart" element={<Cart cartItems={cartItems} />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
