import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="sticky top-0 w-screen py-7 px-10">
			<Link to="/">Navbar</Link>
		</div>
	);
}

export default Navbar;
