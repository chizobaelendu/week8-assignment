interface objectiveInterface {
    objective: string;
    objectiveInitial: string;
    objectiveDescription: string;
    objectiveLink: string;
};

export const yraObjectives:objectiveInterface[] = [
    {
        objective: "publish",
        objectiveInitial: "p",
        objectiveDescription: "Build the skills to communicate and publish meaningful research.",
        objectiveLink: "Explore resources →"
    },
    {
        objective: "research",
        objectiveInitial: "r",
        objectiveDescription: "Develop sound research knowledge, skills and practice.",
        objectiveLink: "Explore training →"
    },
    {
        objective: "impact",
        objectiveInitial: "i",
        objectiveDescription: "Connect research with meaningful academic and societal outcomes.",
        objectiveLink: "Explore opportunities →"
    },
    {
        objective: "collaborate",
        objectiveInitial: "c",
        objectiveDescription: "Build connections, mentorship and cross-disciplinary partnerships.",
        objectiveLink: "Join community →"
    }
];
