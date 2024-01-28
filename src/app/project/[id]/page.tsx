import React from "react";

const ProjectPage = ({ params }: { params: { id: string } }) => {
	return <div>ProjectPage: {params.id}</div>;
};

export default ProjectPage;
