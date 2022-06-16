import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination = ({ pageCount, displayUsers, changePage }) => {
	return (
		<div className="App">
			<div>{displayUsers()}</div>
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

export default Pagination;
