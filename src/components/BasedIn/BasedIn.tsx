import dynamic from "next/dynamic";

const BasedInDynamic = dynamic(() => import("@/components/BasedIn/MyMap"), {
	ssr: false,
	loading: () => (
		<div className="h-80 w-full bg-secondary text-secondary-foreground rounded-3xl border border-secondary p-4 flex flex-col items-start justify-evenly gap-8 md:justify-start"></div>
	),
});

const BasedIn = (props: any) => {
	return <BasedInDynamic {...props} />;
};

export default BasedIn;
