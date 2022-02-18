import React, { useState } from "react";
import question from "../ions/quizData.json";
import QuizHeader from "../organisms/header/QuizHeader.jsx";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerCheck, setAnswerCheck] = useState(null);
	const [answerGiven, setAnswerGiven] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);

	return (
		<>
			{question.data[currentQuestion] ? (
				<>
					{/** QUIZ-CARD-HEADER */}
					<QuizHeader />
					{/** QUIZ-CARD-MAIN */}
					<h2>{question.data[currentQuestion].question}</h2>
					{question.data[currentQuestion].choices.map(choice => {
						return (
							<button
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
							</button>
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
				<>
					<p>
						you made it through all of the questions and had {correctAnswers}/
						{question.data.length} correct answers!
					</p>
				</>
			)}
		</>
	);
};

export default App;
