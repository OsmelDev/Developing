import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./screens/Layout.jsx";
import Home from "./screens/Home.jsx";
import Products from "./screens/Products.jsx";
import Contact from "./screens/Contact.jsx";
import Profile from "./screens/Profile.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import FormLogin from "./screens/components/FormLogin.jsx";
import FormRegister from "./screens//components/FormRegister.jsx";
import EditUser from "./screens//components/EditUser.jsx";
import ViewUserProfile from "./screens//components/ViewUserProfile.jsx";
import { UserProvider } from "./contexts/UserProvider.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";

const App = () => {
	return (
		<UserProvider>
			<CartProvider>
				<div>
					<Layout />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Products" element={<Products />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Login" element={<FormLogin />} />
						<Route path="/Register" element={<FormRegister />} />
						<Route element={<ProtectedRoute />}>
							<Route path="/Profile" element={<Profile />} />
							<Route path="/Edit" element={<EditUser />} />
							<Route path="/UserProfile" element={<ViewUserProfile />} />
						</Route>
					</Routes>
				</div>
			</CartProvider>
		</UserProvider>
	);
};
export default App;
