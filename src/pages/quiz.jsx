import React, { useState } from "react";
import question from "../ions/quizData.json";
import QuizHeader from "../organisms/header/QuizHeader.jsx";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Footer from "../organisms/footer";
import Typography from "@mui/material/Typography";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerCheck, setAnswerCheck] = useState(null);
	const [answerGiven, setAnswerGiven] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);

	return (
		<div>
			{question.data[currentQuestion] ? (
				<>
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
									size="medium"
									key={choice.id}
									disabled={answerGiven}
									type="button"
									onClick={() => {
										setAnswerGiven(true);
										if (
											choice.choice === question.data[currentQuestion].answer
										) {
											setAnswerCheck("correct");
											setCorrectAnswers(previousValue => previousValue + 1);
										} else {
											setAnswerCheck("wrong");
										}
									}}
								>
									{choice.choice}
								</Button>
							);
						})}
						<br />
						{answerCheck ? `You answer is: ${answerCheck}` : null}
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
				</>
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
