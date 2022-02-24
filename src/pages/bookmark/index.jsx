import React from "react";
import Head from "next/head";
/*import CardExercise from "../../molecules/card-exercise";*/
import Layout from "../../organisms/layout";
import useStore from "../../ions/hooks/store/useStore";
import useGet from "../../ions/hooks/fetch/get";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Page = () => {
	//const { data } = useGet(endpoints.exercises);
	const meta = useStore(state => state.meta);
	console.log(meta);

	return (
		<Layout>
			<Head>
				<title key="title">Bookmarks</title>
			</Head>
			<Typography>Bookmarks</Typography>
			<Stack spacing={2}>
				{/*{data
					?.filter(exercise => Boolean(meta[exercise._id]?.checked))
					.map((exercise, index) => {
						return <CardExercise key={exercise._id} index={index} {...exercise} />;
					})}*/}
			</Stack>
		</Layout>
	);
};

export default Page;
