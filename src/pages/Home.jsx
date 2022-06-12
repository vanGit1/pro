import React from 'react';
import { useState } from 'react';
import JSONdata from '../MOCK_DATA_IMG.json';
import ReactPaginate from 'react-paginate';

const Home = () => {
	const [users, setUsers] = useState(JSONdata.slice(0, 50));
	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 2;
	const pageVisited = pageNumber * usersPerPage;

	const displayUsers = users
		.slice(pageVisited, pageVisited + usersPerPage)
		.map((user, index) => {
			return (
				<div className="user" key={index}>
					<h3>{user.firstName}</h3>
					<img src={user.image} />
					<h3>{user.gender}</h3>
					<h3>{user.age}</h3>
				</div>
			);
		});

	const pageCount = Math.ceil(users.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<div className="App">
			<div onClick={() => console.log(displayUsers)}>{displayUsers}</div>
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'paginationBttns'}
				previousLinkClassName={'previousBttns'}
				nextLinkClassName={'nextBttns'}
				disabledClassName={'paginationDisabled'}
				activeClassName={'paginationActive'}
			/>
		</div>
	);
};

export default Home;
