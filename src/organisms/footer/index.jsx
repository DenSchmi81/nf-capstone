import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import emergencyCall from "../../ions/icons/emergencyCall.png";
import Image from "next/image";

const StyledFab = styled(Fab)({
	position: "absolute",
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: "0 auto",
});

const Footer = () => {
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<footer>
			<Box sx={{ width: 500 }}>
				<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
					<BottomNavigation value={value} onChange={handleChange}>
						<BottomNavigationAction icon={<HomeIcon />} href="../" />
						<BottomNavigationAction icon={<FavoriteIcon />} />
						<BottomNavigationAction icon={<Brightness4Icon />} />
						<StyledFab
							color="#F25764"
							aria-label="add"
							size="medium"
							href="tel:+4911880"
						>
							<Image src={emergencyCall} />
						</StyledFab>
						<BottomNavigationAction icon={<RestartAltIcon />} href="../quiz" />
					</BottomNavigation>
				</Paper>
			</Box>
		</footer>
	);
};
export default Footer;
