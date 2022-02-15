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
			<p />
			<button type="button">
				<Link href="https://www.erstehilfe.de/kursangebot/spezielles">Mehr Infos</Link>
			</button>
			<object
				data="https://www.google.com/maps/d/embed?mid=1TrE-jsqko06LoLNIyPgFd4e48Lo&hl=de&ehbc=2E312F"
				width="flex"
				height="480"
				type="text/html"
			/>
			<p />
			<button type="button">
				<a href="tel:+4911880">Notruf</a>
			</button>
		</Layout>
	);
};

export default Page;
