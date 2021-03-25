import React, { useState } from "react";
import { RgbColorPicker } from "react-colorful";
//import "react-colorful/dist/index.css";
import "./App.css";

function App() {
	const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
	console.log(color);
	return (
		<div
			className="flex flex-col items-center w-screen h-screen"
			style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }}
		>
			<RgbColorPicker
				color={color}
				onChange={setColor}
				className="w-96 h-96 sm:w-2/3 sm:h-2/3"
			/>
		</div>
	);
}

export default App;
