import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import JSONdata from './MOCK_DATA.json';

import './App.scss';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import RangeSlider from './Components/RangeSlider';
import Checkbox from './Components/Checkbox';

function App() {
	const [users, setUsers] = useState(JSONdata.slice(0, 10));
	const [pageNumber, setPageNumber] = useState(0);

	const [openModal, setOpenModal] = useState(false);

	const [search, setSearch] = useState('');

	const [showMale, setShowMale] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const usersPerPage = 2;
	const pageVisited = pageNumber * usersPerPage;
	const [saveData, setSaveData] = useState('');
	const [pageCount, setPageCount] = useState(
		Math.ceil(users.length / usersPerPage)
	);

	const displayUsers = () => {
		let temp = users.filter(val => {
			if (search == '') {
				if (!showMale) {
					return val;
				}
				if (val.gender === 'Male') {
					return val;
				}
			} else if (val.firstName.toLowerCase().includes(search.toLowerCase())) {
				return val;
			}
		});
		console.log(temp, pageVisited, pageVisited + usersPerPage);
		let Element = [];
		temp
			.slice(
				pageVisited > temp.length ? 0 : pageVisited,
				pageVisited + usersPerPage
			)
			.map((user, index) => {
				Element.push(
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
		setPageCount(Math.ceil(temp.length / usersPerPage));

		return Element;
	};

	//? add ITEM to cart
	const onAddToCart = user => {
		setCartItems(prev => [...prev, user]);
	};

	// const pageCount = Math.ceil(users.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<>
			<Navbar />

			<div className="search_container">
				<input
					type="text"
					placeholder="Search..."
					onChange={event => {
						setSearch(event.target.value);
						setPageNumber(0);
					}}
				></input>
			</div>
			<div className="container">
				<RangeSlider />
				{/* посмотрит какое было до этого и сделает противоположное */}
				<Checkbox onToggleMale={() => setShowMale(!showMale)} />
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
