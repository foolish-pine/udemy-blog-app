import { FC, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import "components/Home.css";
import { auth, db } from "firestore";

type Post = {
	id: string;
	author: { id: string; username: string };
	title: string;
	postText: string;
};

export const Home: FC = () => {
	const [postList, setPostList] = useState<Post[] | []>([]);

	const getPosts = async () => {
		const data = await getDocs(collection(db, "posts"));
		setPostList(
			data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
		);
	};

	useEffect(() => {
		void getPosts();
	}, []);

	const handleDelete = async (id: string) => {
		await deleteDoc(doc(db, "posts", id));
		void getPosts();
	};

	return (
		<div className="homePage">
			{postList.map((post) => {
				return (
					<div className="postContents" key={post.id}>
						<div className="postHeader">
							<h1>{post.title}</h1>
						</div>
						<div className="postTextContainer">{post.postText}</div>
						<div className="nameAndDeleteButton">
							<h3>@{post.author.username}</h3>
							{auth.currentUser !== null &&
								post.author.id === auth.currentUser.uid && (
									<button onClick={async () => await handleDelete(post.id)}>
										削除
									</button>
								)}
						</div>
					</div>
				);
			})}
		</div>
	);
};
