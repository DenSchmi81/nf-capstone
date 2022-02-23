import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const Timer = ({}) => {
	const [timer, setTimer] = useState(10);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(time => time - 1);
		}, 1000);
	});
	return timer;
};

export default Timer;
