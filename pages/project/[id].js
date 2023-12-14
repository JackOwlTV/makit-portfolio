// pages/app/project/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import { Projects } from '../../app/data/Projects';

const ProjectDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    // Récupérez les détails du projet en fonction de l'id
    const project = Projects.find((p) => p.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>Description: {project.description}</p>
            {/* Ajoutez d'autres détails du projet en fonction de vos besoins */}
        </div>
    );
};

export default ProjectDetails;
