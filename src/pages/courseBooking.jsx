import Head from "next/head";
import React from "react";
import Link from "next/link";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<h1>First Aid Hero</h1>
			<button type="button">
				<Link href="https://www.erstehilfe.de/startseite">Buche hier Deinen Kurs!</Link>
			</button>
			<a href="tel:+4911880">Notruf</a>
		</Layout>
	);
};

export default Page;
