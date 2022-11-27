import { FC, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "firestore";
import { useNavigate } from "react-router-dom";

import "components/CreatePost.css";

type Props = {
	isAuth: boolean;
};

export const CreatePost: FC<Props> = ({ isAuth }) => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [postText, setPostText] = useState("");

	const createPost = async () => {
		if (auth.currentUser === null) return;

		await addDoc(collection(db, "posts"), {
			title,
			postText,
			author: {
				username: auth.currentUser.displayName,
				id: auth.currentUser.uid,
			},
		});

		navigate("/");
	};

	useEffect(() => {
		if (!isAuth) navigate("/");
	});

	return (
		<div className="createPostPage">
			<div className="postContainer">
				<h1>記事を投稿する</h1>
				<div className="inputPost">
					<div>タイトル</div>
					<input
						type="text"
						placeholder="タイトルを記入"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="inputPost">
					<div>投稿</div>
					<textarea
						placeholder="投稿内容を記入"
						onChange={(e) => setPostText(e.target.value)}
					/>
				</div>
				<button className="postButton" onClick={createPost}>
					投稿する
				</button>
			</div>
		</div>
	);
};
