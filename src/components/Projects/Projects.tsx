import React from "react";

const ProjectsData = [
	{
		id: 1,
		keyWords: [
			"React",
			"Typescript",
			"Solidity",
			"Web3",
			"Ethereum",
			"Blockchain",
			"Dapp",
			"Smart Contract",
			"Truffle",
			"Hardhat",
			"Ganache",
			"Metamask",
			"Infura",
			"IPFS",
			"OpenZeppelin",
			"Etherscan",
			"Remix",
			"Gnosis Safe",
			"OpenSea",
			"Uniswap",
			"ERC20",
			"ERC721",
			"ERC1155",
		],
		title: "Demyth",
		shortDesc:
			"Demyth is a decentralized platform for the creation of NFTs (ERC721, ERC1155) and the management of their ownership.",
		longDesc:
			"Demyth is a decentralized platform for the creation of NFTs (ERC721, ERC1155) and the management of their ownership. It is a platform that allows you to create your own NFTs, to manage their ownership and to sell them on the marketplace. It is a platform that allows you to create your own NFTs, to manage their ownership and to sell them on the marketplace. It is a platform that allows you to create your own NFTs, to manage their ownership and to sell them on the marketplace. It is a platform that allows you to create your own NFTs, to manage their ownership and to sell them on the marketplace.",
		imageUrl: "https://demyth.com/images/demyth-logo.png",
		links: {
			website: "https://demyth.com/",
			github: "https://github...",
		},
	},
];
const Projects = () => {
	return (
		<div>
			<h1>Personnal</h1>
			<ul>
				<li>Demyth</li>
				<li>CommownSharedWallet</li>
				<li>Analyse technique pour Angle sur notion</li>
				<li>Modern Design Website</li>
				<li>Tiktok</li>
				<li>Ethernaut</li>
			</ul>
			<h1>Professional</h1>
			<ul>
				<li>Demyth</li>
				<li>CommownSharedWallet</li>
				<li>Analyse technique pour Angle sur notion</li>
				<li>Modern Design Website</li>
				<li>Tiktok</li>
				<li>Ethernaut</li>
			</ul>
		</div>
	);
};

export default Projects;
