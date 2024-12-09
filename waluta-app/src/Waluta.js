import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Waluta.css";

import CurrencyAmountForm from "./CurrencyAmountForm";
import SetCurrencyForm from "./SetCurrencyForm";

import Chart from "./Chart";

const Waluta = () => {
	const [data, setData] = useState([]);

	//Variables
	const [amount, setAmount] = useState(5);
	const [currency, setCurrency] = useState("usd");

	const fetchData = async (currentAmount) => {
		const response = await axios.get(
			`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/last/${currentAmount}?format=json`
		);
		setData(response.data.rates);
	};

	useEffect(() => {
		fetchData(amount);
	}, [amount, currency]);

	const setCurrentAmount = (amount) => {
		setAmount(amount);
	};
	const setCurrencyForm = (currency) => {
		setCurrency(currency);
	};

	const Chart = (data) => {
		Chart(data);
	};

	return (
		<div>
			<h1>Exchange Rates for USD</h1>
			<CurrencyAmountForm setCurrentAmount={setCurrentAmount} />
			<SetCurrencyForm setCurrencyForm={setCurrencyForm} />
			<ul>
				{data.map((rate) => (
					<li key={rate.effectiveDate}>
						Date: {rate.effectiveDate}, Rate: {rate.mid} PLN
					</li>
				))}
			</ul>
			<Chart data={data} />; // Pass the fetched data to CurrencyChart
		</div>
	);
};

export default Waluta;
