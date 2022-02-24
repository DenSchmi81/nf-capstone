import create from "zustand";
import { persist } from "zustand/middleware";
import produce from "immer";

export const padStart = (n, length, fill = "0") => `${n}`.padStart(length, fill);

export const getTime = ms => {
	const m = Math.floor(ms / 60_000);
	const s = Math.floor((ms % 60_000) / 1000);

	return {
		mm: padStart(s === 60 ? m + 1 : m, 2),
		ss: padStart(s % 60, 2),
	};
};

const useCountdown = create(
	persist(set => ({
		quizEnd: null,
		personalTime: null,
		differenceTime: null,
		setQuizEnd: timeStamp => {
			set({ quizEnd: timeStamp });
		},
		setPersonalTime: timeStamp => {
			set({ personalTime: timeStamp });
		},
		setTimeDifference: () => {
			set(
				produce(state => {
					state.differenceTime = state.quizEnd - state.personalTime;
				})
			);
		},
		calcTimeDifference: () => {
			set(
				produce(state => {
					const calcDifferenceInMinutes = (state.differenceTime % 86400000) % 3600000; // minutes
					state.differenceTime = calcDifferenceInMinutes;
				})
			);
		},
	})),
	{ name: "firstAidCountdown" }
);

export default useCountdown;
