import HealingIcon from "@mui/icons-material/Healing";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useQuizMeta from "../ions/hooks/store/useStore.jsx";
import question from "../ions/quizData.json";
import Footer from "../organisms/footer";
import QuizHeader from "../organisms/header/QuizHeader.jsx";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { useSnackbar } from "notistack";
import Countdown from "react-countdown";
import LinearProgress from "@mui/material/LinearProgress";
import useCountdown, { getTime } from "/src/ions/hooks/store/useCountdown";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerCheck, setAnswerCheck] = useState(null);
	const [answerGiven, setAnswerGiven] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const meta = useQuizMeta(state => state.meta);
	const setBookmark = useQuizMeta(state => state.setBookmark);
	const { enqueueSnackbar } = useSnackbar();
	const setPersonalTime = useCountdown(state => state.setPersonalTime);
	const setTimeDifference = useCountdown(state => state.setTimeDifference);
	const calcTimeDifference = useCountdown(state => state.calcTimeDifference);
	const differenceTime = useCountdown(state => state.differenceTime);
	const { mm, ss } = getTime(differenceTime);

	const Completionist = () => <span>You are good to go!</span>;

	const renderer = ({ total, completed }) => {
		console.log((total * 1.667) / 10000);
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				/*					<Typography>
						{hours}:{minutes}:{seconds}
					</Typography>*/
				<LinearProgress variant="determinate" value={(total * 1.667) / 10000} />
			);
		}
	};

	// Renderer callback with condition

	const id = question.data[currentQuestion] ? question.data[currentQuestion].id : null;
	const handleSnackbar = variant => {
		enqueueSnackbar(
			<Typography>Deine Antwort ist: {variant ? "richtig" : "falsch"}</Typography>,
			{
				autoHideDuration: 3000,
				variant: variant ? "success" : "error",
			}
		);
	};
	console.log(answerCheck);
	console.log(question.data.length);
	//Time of Quiz Start + 10 minutes
	const quizEnd = useCountdown(state => state.quizEnd);
	return (
		<div>
			{question.data[currentQuestion] ? (
				<Stack direction="column" sx={{ p: 2 }} spacing={2}>
					<QuizHeader />
					<Countdown date={quizEnd} renderer={renderer} />
					<Card variant="outlined">
						<CardContent
							sx={{
								textAlign: "center",
							}}
						>
							<Typography variant="body1" paddingTop="10px" paddingBottom="10px">
								{question.data[currentQuestion].question}
							</Typography>
						</CardContent>
						<CardActions>
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
						</CardActions>
					</Card>
					{question.data[currentQuestion].choices.map((choice, index) => {
						console.log("I am question number", index);
						return (
							<Button
								key={choice.id}
								variant="contained"
								disabled={answerGiven}
								onClick={() => {
									console.log(
										choice.choice,
										question.data[currentQuestion].answer
									);
									setAnswerGiven(true);
									if (choice.choice === question.data[currentQuestion].answer) {
										setAnswerCheck(true);
										setCorrectAnswers(previousValue => previousValue + 1);
										handleSnackbar(true);
									} else {
										setAnswerCheck(false);
										handleSnackbar(false);
									}
								}}
							>
								{choice.choice}
							</Button>
						);
					})}
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography variant="h6">
							Frage {currentQuestion + 1} von {question.data.length}
						</Typography>
					</Box>
					<Button
						variant="contained"
						color="primary"
						disabled={!answerGiven}
						onClick={() => {
							setCurrentQuestion(previousValue => previousValue + 1);
							setAnswerCheck(null);
							setAnswerGiven(false);
							if (currentQuestion + 1 === question.data.length) {
								setPersonalTime(Date.now());
								setTimeDifference();
								calcTimeDifference();
							}
						}}
					>
						{currentQuestion + 1 === question.data.length
							? "see results"
							: "next question"}
					</Button>
				</Stack>
			) : (
				<Stack sx={{ p: 2, gap: 2 }}>
					<Box>
						<Card variant="outlined" sx={{ p: 1, textAlign: "center" }}>
							<Typography variant="h6" color="hsl(231, 15%, 18%)">
								Du hast es durch alle Fragen geschafft und hattest {correctAnswers}{" "}
								von {question.data.length} richtig beantwortet! Soviel Zeit hast Du
								gebraucht: {mm}:{ss}
							</Typography>
						</Card>
					</Box>
					<Box>
						<Card variant="outlined" sx={{ p: 1, textAlign: "center" }}>
							<Typography variant="h6" color="hsl(231, 15%, 18%)">
								Soviel Zeit hast Du gebraucht: {mm}:{ss}
							</Typography>
						</Card>
					</Box>
				</Stack>
			)}
			<Footer />
		</div>
	);
};

export default App;
