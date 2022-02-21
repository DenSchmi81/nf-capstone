import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const QuizHeader = () => {
	return (
		<header>
			<Stack sx={{ m: 2 }} spacing={2}>
				<Typography variant="h1">Erste Hilfe Quiz</Typography>
				<Typography variant="h2">Teste Dein Wissen!</Typography>
			</Stack>

const QuizHeader = () => {
	return (
		<header>
			<h1>Erste Hilfe Quiz</h1>
			<h2>Teste Dein Wissen!</h2>
		</header>
	);
};

export default QuizHeader;
