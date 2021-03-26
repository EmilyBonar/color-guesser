import React, { useState } from "react";
import { RgbColor, RgbColorPicker } from "react-colorful";
import colors, { Color } from "./colors";
import "./App.css";

function App() {
	const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
	const [targetColor] = useState(
		colors[Math.floor(Math.random() * colors.length)],
	);
	const [showScore, setShowScore] = useState(false);
	return (
		<div
			className="flex flex-col items-center w-screen h-screen"
			style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }}
		>
			<RgbColorPicker
				color={color}
				onChange={setColor}
				className="m-4 w-96 h-96 sm:w-2/3 sm:h-2/3"
			/>
			<div className="w-full text-center bg-gray-800 bg-opacity-20 h-1/3">
				<p className="m-4 text-5xl">{targetColor.name}</p>
				<button
					className="p-2 bg-gray-500 rounded shadow"
					style={{ color: `rgb(${color.r},${color.g},${color.b})` }}
					onClick={() =>
						showScore ? window.location.reload() : setShowScore(true)
					}
				>
					{showScore ? "Play Again?" : "Guess"}
				</button>
				<p className={`${showScore ? "visible" : "hidden"} text-6xl m-2`}>
					{grade(color, targetColor).slice(0, 5)}%
				</p>
			</div>
		</div>
	);
}

function grade(inputColor: RgbColor, targetColor: Color) {
	let sqrDiff =
		(inputColor.r - targetColor.rgb.r) ** 2 +
		(inputColor.g - targetColor.rgb.g) ** 2 +
		(inputColor.b - targetColor.rgb.b) ** 2;
	return String(
		100 - (Math.sqrt(sqrDiff ? sqrDiff : 1) / Math.sqrt(3 * 255 ** 2)) * 100,
	);
}

export default App;
