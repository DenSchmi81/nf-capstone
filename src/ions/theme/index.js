import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		common: {
			black: "hsl(231, 15%, 18%)",
			white: "hsl(60, 30%, 96%)",
		},
		primary: {
			main: "#F2E205",
		},
		secondary: {
			main: "#049DD9",
		},
		background: {
			paper: "hsl(60, 30%, 96%)",
			default: "hsl(197, 96%, 43%)",
		},
		text: {
			primary: "hsl(231, 15%, 18%)",
		},
	},
	typography: {
		h1: {
			fontFamily: `"Montserrat", sans-serif`,
			color: "hsl(60, 30%, 96%)",
			variant: "h1",
			fontWeight: "bold",
			fontStyle: "italic",
		},
		h2: {
			fontFamily: `"Montserrat", sans-serif`,
			color: "hsl(60, 30%, 96%)",
		},
		h3: {
			fontFamily: `"Montserrat", sans-serif`,
		},
		h4: {
			fontFamily: `"Montserrat", sans-serif`,
			fontStyle: "italic",
		},
		h5: {
			color: "hsl(60, 30%, 96%)",
		},
		h6: {
			color: "hsl(60, 30%, 96%)",
		},
	},
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					"&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected": {
						color: "#F25764",
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					"&.MuiCheckbox-root.Mui-checked": {
						color: "#F25764",
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					border: 0,
					borderRadius: 10,
					fontWeight: 500,
					fontSize: 16,
					height: 50,
					padding: "0 30px",
				},
			},
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		common: {
			black: "hsl(231, 15%, 18%)",
			white: "hsl(60, 30%, 96%)",
		},
		primary: {
			main: "#F2E205",
		},
		secondary: {
			main: "#049DD9",
		},
		background: {
			paper: "hsl(231, 15%, 28%)",
			default: "hsl(231, 15%, 18%)",
		},
		text: {
			primary: "hsl(60, 30%, 96%)",
		},
	},
	typography: {
		h1: {
			fontFamily: `"Montserrat", sans-serif`,
			color: "hsl(60, 30%, 96%)",
			variant: "h1",
			fontWeight: "bold",
			fontStyle: "italic",
		},
		h2: {
			fontFamily: `"Montserrat", sans-serif`,
			color: "hsl(60, 30%, 96%)",
		},
		h3: {
			fontFamily: `"Montserrat", sans-serif`,
		},
		h4: {
			fontFamily: `"Montserrat", sans-serif`,
			fontStyle: "italic",
		},
		h5: {
			color: "hsl(60, 30%, 96%)",
		},
		h6: {
			color: "hsl(60, 30%, 96%) !important",
		},
	},
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					"&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected": {
						color: "#F25764",
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					"&.MuiPaper-root-MuiCard-root": {
						backgroundColor: "red",
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					border: 0,
					borderRadius: 10,
					fontWeight: 500,
					fontSize: 16,
					height: 50,
					padding: "0 30px",
				},
			},
		},
	},
});
