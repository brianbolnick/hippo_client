import {useEffect } from 'react';
import { signOut } from "utils";

const Logout = () => {
	useEffect(() => { signOut(); })
	return null;
}

export default Logout
