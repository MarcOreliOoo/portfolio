import React from "react";
import HomeLink from "./HomeLink";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<nav className="flex flex-row items-center justify-between h-full border border-primary text-lg font-medium">
			<HomeLink />
			<Menu />
		</nav>
	);
};

export default Navbar;
