import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
/*
import StartQuiz from "../atoms/button/StartQuiz.js";
*/
import Question from "../molecules/Question.js";
/*import "bulma/css/bulma.min.css";*/

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Erste-Hilfe-Quiz</title>
				<meta key="description" name="description" content="First Aid project" />
			</Head>
			{/* <StartQuiz /> */}
			<Question />
			<a href="tel:+4911880">Notruf</a>
		</Layout>
	);
};

export default Page;
