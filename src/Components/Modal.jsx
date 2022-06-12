import React from 'react';
import './Modal.scss';

const Modal = ({ setOpenModal }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={() => setOpenModal(false)}>X</button>
				</div>
				<div className="title">
					<h1>Modal title</h1>
				</div>
				<div className="body">
					<p>Modal body</p>
				</div>
				<div className="footer">
					<button id="cancelBtn" onClick={() => setOpenModal(false)}>
						Close
					</button>
					<button onClick={() => window.alert('added')}>Add</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
