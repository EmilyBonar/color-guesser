import React, { useEffect, useState } from "react";
import { RgbColor, RgbColorPicker } from "react-colorful";
import colors, { Color } from "./colors";
import "./App.css";

function App() {
	const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
	const [targetColor] = useState(
		colors[Math.floor(Math.random() * colors.length)],
	);
	const [submitScore, setSubmitScore] = useState(false);
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
			className="w-screen h-screen overflow-hidden"
			style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }}
		>
			<HeaderBar buttonOnClick={() => setSidebarOpen(!sidebarOpen)} />
			<div className="flex h-full">
				<div
					className={`flex flex-col items-center w-full h-full max-h-screen`}
				>
					<RgbColorPicker
						color={color}
						onChange={setColor}
						className="w-11/12 h-full max-w-5xl max-h-full m-4 cursor-pointer"
					/>
					<BottomBar
						inputColor={color}
						targetColor={targetColor}
						submitScore={submitScore}
						setSubmitScore={setSubmitScore}
					/>
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
			<Wordmark />
			<HamburgerIcon buttonOnClick={props.buttonOnClick} />
		</header>
	);
}

function Wordmark() {
	return (
		<h1
			className="p-2 text-4xl font-bold text-transparent cursor-pointer from-red-600 via-green-600 to-blue-600 bg-gradient-to-r bg-clip-text"
			onClick={() => window.location.reload()}
		>
			ColorGuesser
		</h1>
	);
}

function HamburgerIcon(props: { buttonOnClick: Function }) {
	return (
		<svg
			onClick={() => props.buttonOnClick()}
			className="h-10 m-2 cursor-pointer"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="3" y1="12" x2="21" y2="12"></line>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<line x1="3" y1="18" x2="21" y2="18"></line>
		</svg>
	);
}

function ScoreSidebar(props: { open: boolean; scores: string[] }) {
	return (
		<div
			className={`${
				props.open ? "scale-x-100" : "scale-x-0"
			} bg-white bg-opacity-60 max-w-lg min-w-min flex flex-col overflow-y-scroll absolute transform right-0 h-5/6 transition origin-right`}
		>
			<AverageScore scores={props.scores} />
			<h2 className="m-4 text-4xl font-semibold text-center">Score History</h2>
			<ScoreList scores={props.scores} />
		</div>
	);
}

function AverageScore(props: { scores: string[] }) {
	if (props.scores.length > 0) {
		return (
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
		);
	}
	return <></>;
}

function ScoreList(props: { scores: string[] }) {
	return (
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
	);
}

function BottomBar(props: {
	inputColor: RgbColor;
	targetColor: Color;
	submitScore: Boolean;
	setSubmitScore: Function;
}) {
	return (
		<div
			className={`w-full text-center bg-gray-800 h-full max-h-72 bg-opacity-20 ${
				props.inputColor.r + props.inputColor.g + props.inputColor.b < 255
					? "text-white"
					: "text-black"
			}`}
		>
			<p className="m-4 text-4xl sm:text-5xl">{props.targetColor.name}</p>
			{props.submitScore ? (
				<>
					<RefreshButton />{" "}
					<Grade
						inputColor={props.inputColor}
						targetColor={props.targetColor}
					/>
				</>
			) : (
				<SubmitButton setSubmitScore={props.setSubmitScore} />
			)}
		</div>
	);
}

function SubmitButton(props: { setSubmitScore: Function }) {
	return (
		<Button onClick={() => props.setSubmitScore(true)} text="Submit Guess" />
	);
}

function RefreshButton() {
	return <Button onClick={() => window.location.reload()} text="Play Again?" />;
}

function Button(props: { onClick: Function; text: string }) {
	return (
		<button
			className="p-2 text-2xl text-black bg-gray-300 border border-gray-400 rounded-lg shadow"
			onClick={() => props.onClick()}
		>
			{props.text}
		</button>
	);
}

function Grade(props: { inputColor: RgbColor; targetColor: Color }) {
	return (
		<p className={`text-4xl sm:text-6xl m-2`}>
			{grade(props.inputColor, props.targetColor)}%
		</p>
	);
}

export default App;
