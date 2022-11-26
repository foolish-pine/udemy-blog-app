import { FC } from "react";
import {
	faHouse,
	faFilePen,
	faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import "components/Navbar.css";

export const Navbar: FC = () => {
	return (
		<nav>
			<Link to="/">
				<FontAwesomeIcon icon={faHouse} />
				ホーム
			</Link>
			<Link to="/createpost">
				<FontAwesomeIcon icon={faFilePen} />
				記事投稿
			</Link>
			<Link to="/login">
				<FontAwesomeIcon icon={faArrowRightToBracket} />
				ログイン
			</Link>
		</nav>
	);
};
