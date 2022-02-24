import { useRouter } from "next/router";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HealingIcon from "@mui/icons-material/Healing";
import HomeIcon from "@mui/icons-material/Home";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import useCountdown from "../../ions/hooks/store/useCountdown";
import emergencyCall from "../../ions/icons/emergencyCall.png";
import Image from "next/image";
import useColorMode from "/src/ions/hooks/store/useColorMode";

const StyledFab = styled(Fab)({
	position: "absolute",
	zIndex: 1,
	top: -25,
	left: 0,
	right: 0,
	margin: "0 auto",
});

const Footer = () => {
	const { push, asPath } = useRouter();
	const toggleColorMode = useColorMode(state => state.toggleColorMode);
	const setQuizEnd = useCountdown(state => state.setQuizEnd);

	return (
		<footer>
			<BottomNavigation sx={{ mt: 5, visibility: "hidden" }} />
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation value={asPath}>
					<BottomNavigationAction
						value="/"
						icon={<HomeIcon />}
						onClick={() => {
							push("/");
						}}
					/>
					<BottomNavigationAction
						value="/bookmark"
						icon={<HealingIcon />}
						onClick={() => {
							push("/bookmark");
						}}
					/>
					<BottomNavigationAction
						button
						icon={<Brightness4Icon />}
						onClick={() => {
							toggleColorMode();
						}}
					/>
					{asPath === "/quiz" || asPath === "/bookmark" ? (
						""
					) : (
						<StyledFab
							aria-label="add"
							size="medium"
							href="tel:+4911880"
							sx={{ background: "#F25764" }}
						>
							<Image src={emergencyCall} alt="" />
						</StyledFab>
					)}

					<BottomNavigationAction
						button
						icon={<RestartAltIcon />}
						href="../quiz"
						onClick={() => {
							setQuizEnd(Date.now() + 10 * 60000);
						}}
					/>
				</BottomNavigation>
			</Paper>
		</footer>
	);
};
export default Footer;
