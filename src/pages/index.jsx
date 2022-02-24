import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import LogoComponent from "/src/ions/logo/LogoComponent";
import useCountdown from "../ions/hooks/store/useCountdown";

const Page = () => {
	const setQuizEnd = useCountdown(state => state.setQuizEnd);
	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<Stack
				sx={{
					gap: 5,
					p: 2,
					position: "absolute",
					top: "50%",
					transform: "translateY(-60%)",
				}}
			>
				<Box sx={{ textAlign: "center" }}>
					<Box>
						<LogoComponent color="hsl(60, 30%, 96%)" size={45} />
					</Box>
					<Typography
						variant="h4"
						fontFamily="Montserrat, cursive"
						color="white"
						align="center"
						margin="10px"
					>
						Be a
					</Typography>

					<Typography
						fontFamily="Montserrat, cursive"
						fontWeight="900"
						variant="h4"
						color="white"
						align="center"
					>
						First Aid Hero
					</Typography>
				</Box>

				<Card variant="outlined" sx={{ p: 1, textAlign: "center" }}>
					<Typography variant="h6" color="hsl(231, 15%, 18%)">
						Hand aufs Herz: kannst Du im Ernstfall Menschenleben retten? Überprüfe mit
						diesem Quiz Dein Wissen.
					</Typography>
				</Card>

				<Button
					variant="contained"
					href="/quiz"
					onClick={() => {
						setQuizEnd(Date.now() + 10 * 60000);
					}}
				>
					<Typography variant="body1">Teste Dein Wissen!</Typography>
				</Button>
			</Stack>
		</Layout>
	);
};

export default Page;
