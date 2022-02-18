import React from "react";
/*import "bulma/css/bulma.min.css";*/

const StartQuiz = ({ onQuizStart }) => {
	return (
		<>
			<h1>Teste Dein Wissen!</h1>
			<p>Viel Erfolg!</p>
			<button type="button" onClick={onQuizStart}>
				Los gehts...
			</button>
		</>
	);
};

export default StartQuiz;
