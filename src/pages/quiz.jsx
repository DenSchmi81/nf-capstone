import React, { useState } from "react";
import question from "../ions/quizData.json";
import QuizHeader from "../organisms/header/QuizHeader.jsx";
import Button from "@mui/material/Button";
import IconButton from "@material-ui/core/IconButton";
import Footer from "../organisms/footer";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerCheck, setAnswerCheck] = useState(null);
	const [answerGiven, setAnswerGiven] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);

	return (
		<div>
			{question.data[currentQuestion] ? (
				<>
					{/** QUIZ-CARD-HEADER */}
					<QuizHeader />

					{/** QUIZ-CARD-MAIN */}
					<h2>{question.data[currentQuestion].question}</h2>
					{question.data[currentQuestion].choices.map(choice => {
						return (
							<Button
								size="medium"
								key={choice.id}
								disabled={answerGiven}
								type="button"
								onClick={() => {
									setAnswerGiven(true);
									if (choice.choice === question.data[currentQuestion].answer) {
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
					{/* QUIZ-CARD-FOOTER*/}
					<br />
					{answerCheck ? `You answer is: ${answerCheck}` : null}
					<h5>
						question {currentQuestion + 1}/{question.data.length}
					</h5>
					<button
						type="button"
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
					</button>
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
