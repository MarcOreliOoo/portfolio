import React from "react";
import HomeLink from "./HomeLink";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<nav className="flex flex-row items-center justify-between h-14 w-full text-lg font-medium gap-x-[0.1rem]">
			<HomeLink />
			<Menu />
		</nav>
	);
};

export default Navbar;
