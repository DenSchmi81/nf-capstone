import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import mausLogo from "../ions/icons/mausLogo.png";
import Card from "@mui/material/Card";
import Container from "@mui/material/Box";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<Image src={mausLogo} alt="" />
			<Stack direction="column" sx={{ flexGrow: 1, m: 5, paddingBottom: 5 }}>
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
				<Container>
					<Card variant="outlined" sx={{ padding: 3 }}>
						<Typography component="h2" variant="h3" color="black">
							Kannst Du im Ernstfall Menschenleben retten?
						</Typography>
					</Card>
				</Container>
				<Button
					sx={{ marginTop: "50%" }}
					fontWeight="200"
					type="button"
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
