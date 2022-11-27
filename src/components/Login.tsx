import { FC } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "firestore";
import { useNavigate } from "react-router-dom";

type Props = {
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Login: FC<Props> = ({ setIsAuth }) => {
	const navigate = useNavigate();
	const loginInWithGoogle = () => {
		// Googleでログイン
		void signInWithPopup(auth, provider).then((result) => {
			localStorage.setItem("isAuth", "true");
			setIsAuth(true);
			navigate("/");
		});
	};

	return (
		<div>
			<p>ログインして始める</p>
			<button onClick={loginInWithGoogle}>Googleでログイン</button>
		</div>
	);
};
