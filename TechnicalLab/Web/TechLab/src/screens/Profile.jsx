import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from ".././contexts/UserProvider.jsx";

import ViewUserProfile from "./components/ViewUserProfile.jsx";
import EditUser from "./components/EditUser.jsx";

const Profile = () => {
	const [isEdit, setIsEdit] = useState(false);
	return isEdit ? (
		<EditUser useAuth={useAuth} />
	) : (
		<ViewUserProfile setIsEdit={setIsEdit} />
	);
};

export default Profile;
