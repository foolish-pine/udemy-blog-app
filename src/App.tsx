import { FC, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreatePost } from "components/CreatePost";
import { Home } from "components/Home";
import { Login } from "components/Login";
import { Logout } from "components/Logout";
import { Navbar } from "components/Navbar";

import "App.css";

export const App: FC = () => {
	const [isAuth, setIsAuth] = useState(false);

	return (
		<Router>
			<Navbar isAuth={isAuth} />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/createpost" element={<CreatePost />}></Route>
				<Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
				<Route
					path="/logout"
					element={<Logout setIsAuth={setIsAuth} />}
				></Route>
			</Routes>
		</Router>
	);
};
