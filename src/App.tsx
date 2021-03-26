import React, { useEffect, useState } from "react";
import { RgbColor, RgbColorPicker } from "react-colorful";
import colors, { Color } from "./colors";
import "./App.css";

function App() {
	const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
	const [targetColor] = useState(
		colors[Math.floor(Math.random() * colors.length)],
	);
	const [submitScore, setsubmitScore] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [scores, setScores] = useState<string[]>([]);

	useEffect(() => {
		let storedScores = localStorage.getItem("Scores");
		if (storedScores != null) {
			setScores(storedScores.split(","));
		}
	}, []);
	useEffect(() => {
		if (submitScore) {
			let newScores = [...scores, grade(color, targetColor)];
			setScores(newScores);
			localStorage.setItem("Scores", newScores.join(","));
		}
	}, [submitScore]);
	return (
		<div
			className="w-screen h-screen overflow-hidden "
			style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }}
		>
			<HeaderBar buttonOnClick={() => setSidebarOpen(!sidebarOpen)} />
			<div className="flex h-full">
				<div
					className={`flex flex-col items-center w-full h-full ${
						sidebarOpen ? "hidden sm:visible" : ""
					}`}
				>
					<RgbColorPicker
						color={color}
						onChange={setColor}
						className="w-11/12 h-full max-w-5xl m-4 "
					/>
					<div
						className={`w-full text-center bg-gray-800 h-full max-h-80 bg-opacity-20 ${
							color.r + color.g + color.b < 255 ? "text-white" : "text-black"
						}`}
					>
						<p className="m-4 text-4xl sm:text-5xl">{targetColor.name}</p>
						<button
							className="p-2 text-2xl text-black bg-gray-300 border border-gray-400 rounded-lg shadow"
							onClick={() =>
								submitScore ? window.location.reload() : setsubmitScore(true)
							}
						>
							{submitScore ? "Play Again?" : "Submit Guess"}
						</button>
						<p
							className={`${
								submitScore ? "visible" : "hidden"
							} text-4xl sm:text-6xl m-2`}
						>
							{grade(color, targetColor)}%
						</p>
					</div>
				</div>
				<ScoreSidebar open={sidebarOpen} scores={scores} />
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
		(1 - Math.floor(Math.sqrt(sqrDiff)) / Math.floor(255 * Math.sqrt(3))) * 100,
	).slice(0, 5);
}

function HeaderBar(props: { buttonOnClick: Function }) {
	return (
		<header className="flex justify-between w-full bg-black bg-opacity-80">
			<h1 className="p-2 text-4xl font-bold text-transparent from-red-600 via-green-600 to-blue-600 bg-gradient-to-r bg-clip-text">
				ColorGuesser
			</h1>
			<svg
				onClick={() => props.buttonOnClick()}
				className="h-14"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
		</header>
	);
}

function ScoreSidebar(props: { open: boolean; scores: string[] }) {
	return (
		<div
			className={`${
				props.open ? "w-full" : "hidden"
			} bg-gray-600 bg-opacity-60 max-w-lg min-w-min flex flex-col overflow-auto`}
		>
			{props.scores.length > 0 ? (
				<h2 className="m-4 text-4xl text-center">
					<span className="font-semibold">Average Score: </span>
					{String(
						props.scores.reduce(
							(acc, cur) =>
								(typeof acc == "string" ? parseFloat(acc) : acc) +
								parseFloat(cur),
							0,
						) / props.scores.length,
					).slice(0, 5)}
					%
				</h2>
			) : (
				<></>
			)}
			<h2 className="m-4 text-4xl font-semibold text-center">Score History</h2>
			<ul className="text-center">
				{props.scores.length > 0 ? (
					props.scores

						.map((score) => <li className="text-3xl">{score}%</li>)
						.reverse()
				) : (
					<p className="text-2xl font-semibold ">
						There aren't any scores here yet
					</p>
				)}
			</ul>
		</div>
	);
}

export default App;
