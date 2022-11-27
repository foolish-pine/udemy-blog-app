import { FC, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import "components/Home.css";
import { db } from "firestore";

type PostList = {
	id: string;
	author: { id: string; username: string };
	title: string;
	postText: string;
};

export const Home: FC = () => {
	const [postList, setPostList] = useState<PostList[] | []>([]);

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(collection(db, "posts"));
			setPostList(
				data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostList[]
			);
		};
		void getPosts();
	}, []);

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
							<button>削除</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
