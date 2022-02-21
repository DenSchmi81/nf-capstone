import React from "react";
import Footer from "../footer";
import Header from "../header";
import Paper from "@mui/material/Paper";

const Layout = ({ children }) => {
	return (
		<Paper sx={{ bgcolor: "primary.main" }}>
			<Header />
			<main>{children}</main>
			<Footer />
		</Paper>
	);
};

export default Layout;
