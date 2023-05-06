import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./Product";

const URL =
	"https://v6.exchangerate-api.com/v6/d784c287b020bf64499676ce/latest/INR";

const App = () => {
	const productsList = [
		{
			name: "mobile",
			imgUrl: "mobile.png",
			price: 23000,
		},
		{
			name: "charger",
			imgUrl: "charger.jpg",
			price: 2300,
		},
		{
			name: "headphone",
			imgUrl: "headphone.jpg",
			price: 230,
		},
	];

	const [currency, setCurrency] = useState("INR");
	const [symbolValue, setSymbolValue] = useState(1);
	const [currencyList, setCurrencyList] = useState({});

	useEffect(() => {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				setCurrencyList(data.conversion_rates);
				console.log(data.conversion_rates);
			});
	}, []);
	const updatedCurrency = (element) => {
		setCurrency(element.target.value);

		const key = element.target.value;

		setSymbolValue(currencyList[key]);
	};

	const [cart, setCart] = useState(0);

	return (
		<>
			<nav className="header">
				<div className="cartFrame">
					<div className="cartValue">{cart}</div>
					<img src={require("./cart.png")} alt="cart" />
				</div>

				<div className="dropdown">
					<select onChange={(element) => updatedCurrency(element)}>
						<option value="INR">INR</option>
						<option value="USD">USD </option>
					</select>
				</div>
			</nav>

			<div className="item">
				{productsList.map((value, index) => {
					return (
						<Product
							name={value.name}
							price={value.price}
							currency={currency}
							exchangePrice={symbolValue}
							imgUrl={value.imgUrl}
							setCart={setCart}
							cart={cart}
							key={index}
						/>
					);
				})}
			</div>
		</>
	);
};

export default App;
