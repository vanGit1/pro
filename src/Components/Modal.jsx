import React from 'react';
import './Modal.scss';

const Modal = ({ setOpenModal, dataProps }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={() => setOpenModal(false)}>X</button>
				</div>
				<div className="title">
					<h1>{dataProps.firstName}</h1>
				</div>
				<div className="body">
					<p>{dataProps.gender}</p>
				</div>
				<div className="body">
					<img src={dataProps.image} />
				</div>
				<div className="body">
					<p>{dataProps.age}</p>
				</div>
				<div className="footer">
					<button id="cancelBtn" onClick={() => setOpenModal(false)}>
						Close
					</button>
					<button
						onClick={() => {
							window.alert(`${dataProps.firstName} is in your card now!👍`);
							{
								setOpenModal(false);
							}
						}}
					>
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
