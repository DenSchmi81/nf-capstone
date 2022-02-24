import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import mausLogo from "../../../nf-capstone-2/src/ions/icons/mausLogo.png";
import Card from "@mui/material/Card";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<Image src={mausLogo} alt="" />
			<Stack direction="column" sx={{ flexGrow: 1, margin: 6 }}>
				<Typography
					variant="h3"
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
					variant="h1"
					color="white"
					align="center"
				>
					First Aid Hero
				</Typography>
				<Stack direction="column" sx={{ flexGrow: 1, marginTop: 3 }}>
					<Card variant="outlined" sx={{ padding: 3, boxShadow: "0 3px 8px 2px" }}>
						<Typography component="h2" variant="h3" color="black">
							Hand aufs Herz: kannst Du im Ernstfall Menschenleben retten? Überprüfe
							mit diesem Quiz Dein Wissen.
						</Typography>
					</Card>
				</Stack>
				<Button
					sx={{ marginTop: "10%" }}
					fontWeight="200"
					variant="contained"
					color="error"
					href="/quiz"
				>
					Teste Dein Wissen!
				</Button>
			</Stack>
		</Layout>
	);
};

export default Page;
