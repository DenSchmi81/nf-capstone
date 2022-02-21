import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#049DD9",
			contrastText: "#FFF",
		},
		secondary: {
			main: "#F2E205",
			contrastText: "#049DD9",
		},
	},
	typography: {
		custom: {
			fontFamily: `"Montserrat", sans-serif`,
			component: "div",
		},
		h1: {
			fontFamily: `"Montserrat", sans-serif`,
			variant: "h1",
			fontSize: "40px",
		},
		h2: {
			fontFamily: `"Montserrat", sans-serif`,
		},
		h3: {
			fontFamily: `"Montserrat", sans-serif`,
			fontWeight: 700,
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFFF",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					background: "#F29D35",
					border: 0,
					borderRadius: 10,
					boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
					color: "white",
					height: 48,
					padding: "0 30px",
					paddingColor: "white",
				},
			},
		},
	},
});

export default theme;
