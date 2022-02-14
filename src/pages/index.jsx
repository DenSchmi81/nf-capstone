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
			<br />
			<iframe
				src="https://www.google.com/maps/d/embed?mid=1TrE-jsqko06LoLNIyPgFd4e48Lo&hl=de&ehbc=2E312F"
				width="375"
				height="812"
			/>
		</Layout>
	);
};

export default Page;
