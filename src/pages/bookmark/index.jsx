import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
/*import useGet from "../../ions/hooks/fetch/get";*/
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import React from "react";
import useStore from "../../ions/hooks/store/useStore";
import questions from "../../ions/quizData.json";
import Layout from "../../organisms/layout";

const Page = () => {
	//const { data } = useGet(endpoints.exercises);
	const meta = useStore(state => state.meta);

	return (
		<Layout>
			<Head>
				<title key="title">Bookmarks</title>
			</Head>

			<Stack spacing={2} sx={{ p: 2 }}>
				<Typography variant="h4">Bookmarks</Typography>
				{questions.data
					?.filter(exercise => Boolean(meta[exercise.id]?.checked))
					.map(exercise => {
						return (
							<Card key={exercise.id} variant="outlined">
								<CardContent>
									<Typography
										variant="body1"
										paddingTop="10px"
										paddingBottom="10px"
										/*sx={{ color: "black" }}*/
									>
										{exercise.question}
									</Typography>
								</CardContent>
							</Card>
						);
					})}
			</Stack>
		</Layout>
	);
};

export default Page;
