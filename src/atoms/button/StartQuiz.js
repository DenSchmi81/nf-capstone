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
		</>
	);
};

export default StartQuiz;
