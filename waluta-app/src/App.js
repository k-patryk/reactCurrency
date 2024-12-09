import "./App.css";
import Waluta from "./Waluta";

import LineChart from "./Chart";

function App() {
	return (
		<div className="App">
			<Waluta />
			<h2>Chart</h2>
			<LineChart />
		</div>
	);
}

export default App;
