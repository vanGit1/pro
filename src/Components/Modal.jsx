import React from 'react';

const Modal = ({ setOpenModal }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<button onClick={() => setOpenModal(false)}>close X</button>
				<div>
					<h1>Modal title</h1>
				</div>
				<div>
					<p>Modal body</p>
				</div>
				<div>
					<button onClick={() => setOpenModal(false)}>Close</button>
					<button onClick={()=>window.alert('added')}>Add</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
