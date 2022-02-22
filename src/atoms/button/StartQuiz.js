import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const StartQuiz = ({ onQuizStart }) => {
	return (
		<>

			<Typography variant="custom" component="h1">
				Teste Dein Wissen!
			</Typography>
			<p>Viel Erfolg!</p>
			<Button type="button" onClick={onQuizStart}>
				Los gehts...
			</Button>

			<h1>Teste Dein Wissen!</h1>
			<p>Viel Erfolg!</p>
			<button type="button" onClick={onQuizStart}>
				Los gehts...
			</button>
		</>
	);
};

export default StartQuiz;
