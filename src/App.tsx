import React, { useState } from "react";
import { RgbColor, RgbColorPicker } from "react-colorful";
import colors, { Color } from "./colors";
import "./App.css";

function App() {
	const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
	const [targetColor] = useState(
		colors[Math.floor(Math.random() * colors.length)],
	);
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
			<p className="m-4 text-5xl">{targetColor.name}</p>
			<button className="p-2 bg-white rounded">Guess</button>
			<p className="">{grade(color, targetColor).slice(0, 5)}</p>
		</div>
	);
}

function grade(inputColor: RgbColor, targetColor: Color) {
	return String(
		100 -
			(((inputColor.r - targetColor.rgb.r) ** 2 +
				(inputColor.g - targetColor.rgb.g) ** 2 +
				(inputColor.b - targetColor.rgb.b) ** 2) /
				(3 * 255 ** 2)) *
				100,
	);
}

export default App;
