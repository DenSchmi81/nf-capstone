import React from "react";
import Checkbox from "@mui/material/Checkbox";
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import HealingIcon from '@mui/icons-material/Healing';

const BookmarkIcon = ({ bookmarked, index }) => {

	return (
		<Checkbox
			checked={bookmarked ? bookmarked : false}
			icon={<HealingIcon />}
			checkedIcon={<HealingTwoToneIcon />}
			inputProps={{ "aria-label": "controlled"}
				/>
				);
};

	export default BookmarkIcon;
