import { useEffect, useState } from "react";
import "./Product.css";
const Product = ({
	name,
	price,
	imgUrl,
	currency,
	exchangePrice,
	setCart,
	cart,
}) => {
	const [quantity, setQuantity] = useState(0);

	const increment = () => {
		setQuantity(quantity + 1);
		setCart(cart + 1);
	};

	useEffect(() => {}, [quantity]);

	const decrement = () => {
		if (quantity <= 0) {
			setQuantity(0);
		} else {
			setQuantity(quantity - 1);
			setCart(cart - 1);
		}
	};

	return (
		<div className="product">
			<img className={name} src={require("./" + imgUrl)} alt={name} />
			<h1>{name}</h1>
			<h4>
				Price: {price * exchangePrice} {currency}{" "}
			</h4>

			<div className="quantity">
				<button onClick={increment}>+</button>
				<span>{quantity}</span>
				<button onClick={decrement}>-</button>
			</div>
		</div>
	);
};

export default Product;
