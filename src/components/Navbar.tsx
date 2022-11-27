import { FC } from "react";
import {
	faHouse,
	faFilePen,
	faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "components/Navbar.css";

type Props = {
	isAuth: boolean;
};

export const Navbar: FC<Props> = ({ isAuth }) => {
	return (
		<nav>
			<Link to="/">
				<FontAwesomeIcon icon={faHouse} />
				ホーム
			</Link>
			{!isAuth ? (
				<Link to="/login">
					<FontAwesomeIcon icon={faArrowRightToBracket} />
					ログイン
				</Link>
			) : (
				<>
					<Link to="/createpost">
						<FontAwesomeIcon icon={faFilePen} />
						記事投稿
					</Link>
					<Link to="/logout">
						<FontAwesomeIcon icon={faArrowRightToBracket} />
						ログアウト
					</Link>
				</>
			)}
		</nav>
	);
};
