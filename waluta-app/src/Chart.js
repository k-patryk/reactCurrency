// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

import Waluta from "./Waluta";

const Chart = (props) => {
	const labels = props.data.map((rate) => rate.effectiveDate), // Dates for the x-axis
		data = {
			labels: labels,
			datasets: [
				{
					label: "My First Dataset",
					data: props.data.map((rate) => rate.mid), // Rates for the y-axis
					fill: false,
					borderColor: "rgb(75, 192, 192)",
					tension: 0.1,
				},
			],
		};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Line Chart Example",
			},
		},
	};
};

export default Chart;
