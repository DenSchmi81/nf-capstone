import React, { useState } from "react";
import question from "../ions/quizData.json";
import QuizHeader from "../organisms/header/QuizHeader.jsx";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import HealingIcon from "@mui/icons-material/Healing";
import Footer from "../organisms/footer";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import useQuizMeta from "../ions/hooks/store/useStore.jsx";
import Countdown from "react-countdown";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerCheck, setAnswerCheck] = useState(null);
	const [answerGiven, setAnswerGiven] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [open, setOpen] = useState(false);
	const meta = useQuizMeta(state => state.meta);
	const setBookmark = useQuizMeta(state => state.setBookmark);

	/*SNACKBAR HANDLER: start*/
	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	/*SNACKBAR HANDLER: end*/

	/*TIMER HANDLER: start*/
	const renderer = ({ seconds, completed, api }) => {
		if (completed) {
			api.start();
			return null;
		} else {
			return <span>{seconds}</span>;
		}
	};

	const handleOnComplete = () => {
		setCurrentQuestion(previousValue => previousValue + 1);
		console.log(currentQuestion);
	};
	/*TIMER HANDLER: end*/

	const id = question.data[currentQuestion] ? question.data[currentQuestion].id : null;

	return (
		<div>
			{question.data[currentQuestion] ? (
				<Stack direction="column" sx={{ m: 1.5 }} spacing={1}>
					<QuizHeader />
					<div>
						{/*TIMER*/}
						<Countdown
							date={Date.now() + 10000}
							renderer={renderer}
							onComplete={() => handleOnComplete()}
						/>
					</div>
					<Card variant="outlined" sx={{ color: "#FF00FF" }}>
						<Typography
							component="h2"
							variant="h2"
							paddingTop="10px"
							paddingBottom="10px"
							sx={{ color: "black" }}
						>
							{question.data[currentQuestion].question}
						</Typography>
						<Checkbox
							checked={Boolean(meta[id]?.checked)}
							size="large"
							icon={<HealingIcon />}
							checkedIcon={<HealingTwoToneIcon />}
							inputProps={{ "aria-label": "controlled" }}
							onChange={event => {
								setBookmark(id, event.target.checked);
							}}
						/>
					</Card>
					{question.data[currentQuestion].choices.map(choice => {
						return (
							<Button
								key={choice.id}
								disabled={answerGiven}
								onClick={() => {
									setAnswerGiven(true);
									if (choice === question.data[currentQuestion].answer) {
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
						Frage {currentQuestion + 1} von {question.data.length}
					</Typography>
					<Button
						sx={{ width: "200px", fontSize: "16px", align: "center" }}
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
