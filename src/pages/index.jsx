import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/*const useStyles = makeStyles({
	btn: {
		fontSize: 20,
		borderRadius: 15,
		backgroundColor: "#F25764",
		boxShadow: "2px 2px 0 0 #707070",
		"&:hover": {
			boxShadow: "inset 0 0 0 2px #707070",
			backgroundColor: "#F25764",*/

const Page = () => {
	/*	const classes = useStyles();*/

	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<h1 fontFamily="Montserrat">First Aid Hero</h1>
			<Button type="button" variant="contained" href="/quiz" color="error">
				Teste Dein Wissen!
			</Button>
		</Layout>
	);
};

export default Page;
