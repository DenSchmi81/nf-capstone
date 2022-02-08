import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";

const Page = () => {

	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<h1>First Aid Hero</h1>
			<a href="tel:+4911880">Notruf</a>
		</Layout>
	);
};

export default Page;
