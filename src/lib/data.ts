type projectType = {
	id: number;
	title: string;
	colors: string;
	tagsColors: string;
	techs: {
		frontend?: string[];
		blockchain?: string[];
		backend?: string[];
		devops?: string[];
	};
	tags: string[];
	shortDesc: string;
	preview?: string;
	images?: string[];
	links?: {
		website?: string;
		github?: string;
	};
};
const projectsData: projectType[] = [
	{
		id: 1,
		title: "Demyth",
		colors: "bg-primary text-primary-foreground border border-primary",
		tagsColors:
			"bg-primary text-primary-foreground border border-primary-foreground",
		techs: {
			frontend: [
				"Next Js",
				"Typescript",
				"Tailwindcss",
				"shadcn/ui",
				"framer motion",
				"twMerge",
				"cva",
				"next-auth",
				"react-hook-form",
			],
			blockchain: [
				"wagmi",
				"viem",
				"wallet connect",
				"siwe",
				"solidity",
				"hardhat",
				"ethers",
				"openzeppelin",
				"erc20",
				"erc1155",
			],
			backend: ["Nest Js", "Typescript", "MongoDb", "Mongoose"],
			devops: ["Vercel", "Heroku", "Github Actions"],
		},
		tags: [
			"Web3",
			"Strategy",
			"Game",
			"Blockchain",
			"Dapp",
			"Smart Contract",
			"NFT",
			"MarketPlace",
		],
		shortDesc:
			"Demyth is a strategy-based web3 browser game, inspired by mythology, where players compete to ascend the rankings. In addition to the game, this project aims to integrate a variety of common full-stack tools, as we will discuss further.",
		preview: "/videos/FlashbackDemyth.mp4",
		images: ["Demyth_1.PNG", "Demyth_2.PNG"],
		links: {
			website: "https://demyth-frontend.vercel.app/",
			github: "https://github.com/MarcOreliOoo/demyth/tree/main",
		},
	},
	{
		id: 2,
		title: "CommOwn Shared Wallet",
		colors: "bg-accent text-accent-foreground border border-accent",
		tagsColors:
			"bg-accent text-accent-foreground border border-accent-foreground",
		techs: {
			frontend: [
				"React",
				"Typescript",
				"React router dom",
				"Redux toolkit",
				"React Redux",
				"Mantine",
				"Vitest",
			],
			blockchain: [
				"Hardhat",
				"Ethers",
				"Web3-react",
				"Typechain",
				"Waffle",
				"Chai",
				"Solidity",
				"Openzeppelin",
			],
			devops: [
				"Github Action",
				"Vercel",
				"Dependabot",
				"Gist",
				"Husky",
				"ESLint",
				"Prettier",
				"Yarn",
				"Vite",
			],
		},
		tags: [
			"Web3",
			"Gnosis Like",
			"Blockchain",
			"Wallet",
			"Smart Contract",
			"Proxies",
			"UUPS",
			"Assembly",
			"React",
		],
		shortDesc:
			"The CommOwn Shared Wallet project consists in creating a smart contract wallet enabling several people to buy, manage, view and sell ERC-20 or ERC-721 tokens, by sharing the costs of acquisition and gas, as well as the profits.",
		preview: "/videos/FlashbackCSW.mp4",
		images: ["CSW_1.PNG", "CSW_2.PNG"],
		links: {
			website: "https://commown-shared-wallet.vercel.app/",
			github: "https://github.com/commown-shared-wallet",
		},
	},
	{
		id: 3,
		title: "Modern Design Website",
		colors: "bg-background text-foreground border border-foreground",
		tagsColors: "bg-background text-foreground border border-primary",
		techs: {
			frontend: ["React", "Typescript", "React dom", "Tailwindcss"],
			devops: ["Vercel", "ESLint", "Prettier", "Npm", "Vite"],
		},

		tags: [
			"Design",
			"Ui",
			"Tailwindcss",
			"Gradient",
			"Typescript",
			"React",
		],
		shortDesc:
			"Modern Design Website is a project that aims to create a modern website design with a lot of smooth gradient and explore tailwindcss usage.",
		preview: "/videos/FlashbackModernWebApp.mp4",
		images: ["Modern_1.PNG"],
		links: {
			website: "https://start-modern-web3-app.vercel.app/",
			github: "https://github.com/MarcOreliOoo/Modern-Design-App",
		},
	},
	{
		id: 4,
		title: "Technical Explanation of Curve pool hacked 30th june 2023",
		colors: "bg-secondary text-secondary-foreground border border-secondary",
		tagsColors:
			"bg-secondary text-secondary-foreground border border-secondary-foreground",
		techs: {
			blockchain: ["Solidity", "Phalcon", "Etherscan"],
		},

		tags: ["Web3", "Blockchain", "Curve", "Hacking", "Smart Contract"],
		shortDesc:
			"Technical Explanation of Curve pool is a notion file explaining the Curve hacked, that happened the 30th of june 2023.",
		preview: "",
		links: {
			website:
				"https://www.notion.so/Angle-Technical-Case-Engineering-Position-acd28c095ecf4ad5b2f3d484cb6ad6cd",
		},
	},
	{
		id: 5,
		title: "Tiktok Like",
		colors: "bg-secondary text-secondary-foreground border border-secondary",
		tagsColors:
			"bg-secondary text-secondary-foreground border border-secondary-foreground",
		shortDesc:
			"Tiktok Like is a project that aims to create a tiktok like app with next js and sanity following a tutorial of JSMastery.",
		techs: {
			frontend: [
				"NextJs",
				"Typescript",
				"Axios",
				"Tailwindcss",
				"Jwt-Decode",
				"React",
				"React dom",
				"React hook form",
				"React icons",
				"Zustand",
			],
			backend: ["Sanity", "Typescript"],
			devops: ["Vercel", "Npm"],
		},
		tags: [
			"NextJs",
			"Tiktok Like",
			"Zustand",
			"Tailwindcss",
			"Sanity",
			"Typescript",
			"React",
		],
		preview: "",
		links: {
			website: "https://tiktok-like.vercel.app/",
			github: "https://github.com/MarcOreliOoo/tiktok-like",
		},
	},
	{
		id: 6,
		title: "Ethernaut",
		colors: "bg-accent text-accent-foreground border border-accent",
		tagsColors:
			"bg-accent text-accent-foreground border border-accent-foreground",
		shortDesc:
			"Ethernaut is a project that aims to solve the Ethernaut challenges.",
		techs: {
			blockchain: ["Solidity"],
		},
		tags: ["Web3", "Blockchain", "Ethernaut", "Smart Contract"],
		preview: "",
		links: {
			github: "https://github.com/MarcOreliOoo/Ethernaut",
		},
	},
];

export { projectsData, type projectType };
