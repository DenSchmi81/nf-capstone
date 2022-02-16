import React from "react";

const StartQuiz = ({ onQuizStart }) => {
	return (
		<div className="card">
			<div className="card-content">
				<div className="content">
					<h1>Teste Dein Wissen!</h1>
					<p>Viel Erfolg!</p>
					<button className="btn is-info is-medium" onClick={onQuizStart}>
						Los geht's...
					</button>
				</div>
			</div>
		</div>
	);
};

export default StartQuiz;
