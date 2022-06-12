import { useState } from 'react';
import Modal from '../Components/Modal';
import Pagination from '../Components/Pagination';

const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			{openModal && <Modal setOpenModal={setOpenModal} />}
			<Pagination setOpenModal={setOpenModal} />
		</>
	);
};

export default Home;
