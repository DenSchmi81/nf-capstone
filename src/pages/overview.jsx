import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Link from "next/link";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">First Aid Hero</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			<h1>First Aid Hero</h1>
			<button type="button">
				<Link href="/emergency">Notfall</Link>
			</button>
			<button type="button">
				<Link href="/childrenEmergency">Notfall bei Kindern</Link>
			</button>
			<button type="button">
				<Link href="/tips">Erste Hilfe Tipps</Link>
			</button>
			<button type="button">
				<Link href="/quiz">Teste Dein Wissen!</Link>
			</button>
			<button type="button">
				<Link href="/defibrillators">Defi Standorte</Link>
			</button>
			<button type="button">
				<Link href="/courseBooking">Kursbuchung</Link>
			</button>
			<button type="button">
				<a href="tel:+4911880">Notruf</a>
			</button>
		</Layout>
	);
};

export default Page;
