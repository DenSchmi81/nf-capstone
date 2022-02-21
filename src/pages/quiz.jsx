import React, { useState } from "react";
import question from "../ions/quizData.json";
import QuizHeader from "../organisms/header/QuizHeader.jsx";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Footer from "../organisms/footer";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerCheck, setAnswerCheck] = useState(null);
	const [answerGiven, setAnswerGiven] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<div>
			{question.data[currentQuestion] ? (
				<Stack direction="column" sx={{ m: 2 }} spacing={2}>
					<QuizHeader />
					<Card variant="outlined" sx={{ color: "#FF00FF" }}>
						<Typography component="h2" variant="h2" color="black">
							{question.data[currentQuestion].question}
						</Typography>
					</Card>
					{question.data[currentQuestion].choices.map(choice => {
						return (
							<Button
								key={choice.id}
								disabled={answerGiven}
								size="medium"
								onClick={() => {
									setAnswerGiven(true);
									if (choice.choice === question.data[currentQuestion].answer) {
										setAnswerCheck(true);
										setCorrectAnswers(previousValue => previousValue + 1);
									} else {
										setAnswerCheck(false);
									}
									handleClick();
								}}
							>
								{choice.choice}
							</Button>
						);
					})}
					<br />
					{/*SNACK BAR*/}
					<div>
						{answerCheck !== null && (
							<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
								<Alert severity={answerCheck ? "success" : "error"}>
									Deine Antwort ist: {answerCheck ? "richtig" : "falsch"}
								</Alert>
							</Snackbar>
						)}
					</div>
					<Typography variant="h3">
						question {currentQuestion + 1}/{question.data.length}
					</Typography>
					<Button
						disabled={!answerGiven}
						onClick={() => {
							setCurrentQuestion(previousValue => previousValue + 1);
							setAnswerCheck(null);
							setAnswerGiven(false);
						}}
					>
						{currentQuestion + 1 === question.data.length
							? "see results"
							: "next question"}
					</Button>
				</Stack>
			) : (
				<p>
					Yeah, Du hast es durch alle Fragen geschafft und hattest {correctAnswers} von{" "}
					{question.data.length} richtig beantwortet!
				</p>
			)}
			<Footer />
		</div>
	);
};

export default App;
