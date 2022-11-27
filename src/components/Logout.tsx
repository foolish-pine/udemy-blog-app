import { FC } from "react";
import { signOut } from "firebase/auth";
import { auth } from "firestore";
import { useNavigate } from "react-router-dom";

type Props = {
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Logout: FC<Props> = ({ setIsAuth }) => {
	const navigate = useNavigate();
	const logout = () => {
		// Googleでログアウト
		void signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			navigate("/login");
		});
	};

	return (
		<div>
			<p>ログアウトする</p>
			<button onClick={logout}>Googleでログアウト</button>
		</div>
	);
};
