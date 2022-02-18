import React, { useState } from "react";

const Question = ({
	data,
	onAnswerUpdate,
	numberOfQuestions,
	activeQuestion,
	onSetActiveQuestion,
	onSetStep,
}) => {
	const [selected, setSelected] = useState("");
	const [error, setError] = useState("");

	const nextClickHandler = () => {
		if (selected === "") {
			return setError("Bitte eine Antwort auswählen!");
		}
		onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
		setSelected("");
		if (activeQuestion < numberOfQuestions - 1) {
			onSetActiveQuestion(activeQuestion + 1);
		} else {
			onSetStep(3);
		}
	};

	return (
		<>
			<h2>{data.question}</h2>
			<div>
				{data.choices.map(choice => (
					<label key={choice.id}>
						<input
							type="radio"
							name="answer"
							value={choice.choice}
							onChange={event => {
								setSelected(event.target.value);
							}}
						/>
						{choice.choice}
					</label>
				))}
			</div>
			{error && <div>{error}</div>}
			<button type="button" onClick={nextClickHandler}>
				Weiter
			</button>
		</>
	);
};

export default Question;
