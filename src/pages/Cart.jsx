import React from 'react';
import './Cart.scss';

const Cart = ({ cartItems }) => {
	return (
		<div>
			{cartItems.map(item => (
				<div className="user_container">
					<div className="user_cart">
						{item.firstName}
						<img src={item.image} />
						<div>{item.gender}</div>
						<div>{item.age}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
