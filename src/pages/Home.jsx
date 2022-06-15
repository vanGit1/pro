import Modal from '../Components/Modal';
import Pagination from '../Components/Pagination';

const Home = ({
	openModal,
	pageCount,
	displayUsers,
	changePage,
	setOpenModal,
	saveData,
	onAddToCart
}) => {
	return (
		<>
			{openModal && (
				<Modal
					setOpenModal={setOpenModal}
					dataProps={saveData}
					onAddToCart={onAddToCart}
				/>
			)}
			<Pagination
				pageCount={pageCount}
				displayUsers={displayUsers}
				changePage={changePage}
			/>
		</>
	);
};

export default Home;
