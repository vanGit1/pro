import React from 'react';

const Cart = ({ cartItems }) => {
	return (
		<div >
			{cartItems.map(item => (
				<p>{item.firstName}</p>
			))}
		</div>
	);
};

export default Cart;
