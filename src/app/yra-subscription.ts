interface subscriptionInterface {
    subscriptionLevel: string;
    subscriptionInitial: string;
    subscriptionAccess: string;
    subscriptionButtonText: string;
};

export const yraSubscriptions:subscriptionInterface[] = [
    {
        subscriptionLevel: "free resources",
        subscriptionInitial: "f",
        subscriptionAccess: "Explore guides, templates and learning materials.",
        subscriptionButtonText: "Browse free →"
    },
    {
        subscriptionLevel: "premium resources",
        subscriptionInitial: "p",
        subscriptionAccess: "Access premium guides, templates and research toolkits.",
        subscriptionButtonText: "Browse premium →"
    }
];