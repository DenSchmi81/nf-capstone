import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import useColorMode from "../ions/hooks/store/useColorMode";
import { lightTheme, darkTheme } from "../ions/theme/index.js";
import { SnackbarProvider } from "notistack";

const App = ({ Component, pageProps }) => {
	const [theme, setTheme] = useState(lightTheme);
	const colorMode = useColorMode(state => state.colorMode);

	useEffect(() => {
		setTheme(colorMode ? lightTheme : darkTheme);
	}, [colorMode]);
	console.log(colorMode);
	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<CssBaseline />
				<Component {...pageProps} />
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
