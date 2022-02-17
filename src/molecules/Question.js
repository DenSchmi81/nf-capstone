import React, { useState, useEffect, useRef } from "react";

const Question = ({}) => {
	const nextClickHandler = e => {};

	return (
		<div className="card">
			<div className="card-content">
				<div className="content">
					<h2 className="mb-5">Question here</h2>
					<div className="control">
						<label className="radia has-background-light">
							<input type="radio" name="answer" value="" onChange={() => {}} />
							Auswahltext hier
						</label>
					</div>
					<div className="has-text-danger">error here</div>
					<button
						className="button is-link is-medium is-fullwidth mt-4"
						onClick={nextClickHandler}
					>
						Weiter
					</button>
				</div>
			</div>
		</div>
	);
};

export default Question;
