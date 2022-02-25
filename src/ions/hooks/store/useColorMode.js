import create from "zustand";
import { persist } from "zustand/middleware";

const useColorMode = create(

	persist(
		(set, get) => ({
			colorMode: true,
			toggleColorMode: () => {
				const colorMode = get().colorMode;
				set({ colorMode: !colorMode });
			},
		}),
		{ name: "firstAidColorMode" }
	)

	persist((set, get) => ({
		colorMode: true,
		toggleColorMode: () => {
			const colorMode = get().colorMode;
			set({ colorMode: !colorMode });
		},
	})),
	{ name: "firstAidColorMode" }

);

export default useColorMode;
