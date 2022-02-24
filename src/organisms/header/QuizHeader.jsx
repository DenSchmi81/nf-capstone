import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const QuizHeader = () => {
	return (
		<header>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="h5" fontWeight={800}>
					Erste Hilfe Quiz
				</Typography>
				<Typography variant="h6">Teste Dein Wissen!</Typography>
			</Box>
		</header>
	);
};

export default QuizHeader;
