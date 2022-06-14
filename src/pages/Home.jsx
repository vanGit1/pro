import { useState } from 'react';
import Modal from '../Components/Modal';
import Pagination from '../Components/Pagination';
import JSONdata from '../MOCK_DATA_IMG.json';


const Home = () => {
	const [users, setUsers] = useState(JSONdata.slice(0, 10));
	const [pageNumber, setPageNumber] = useState(0);

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

	const pageCount = Math.ceil(users.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			{openModal && (
				<Modal setOpenModal={setOpenModal} dataProps={saveData} />
			)}
			<Pagination
				setOpenModal={setOpenModal}
				pageCount={pageCount}
				displayUsers={displayUsers}
				changePage={changePage}
			/>
		</>
	);
};

export default Home;
