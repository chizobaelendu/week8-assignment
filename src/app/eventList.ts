interface eventListInterface {
    id: number;
    heading: string;
    type: string;
    description: string;
    date: string;
    modeOfLecture: string;
    duration: string;
    regFee?: number; //The ternary operator (?) indicates that regFee property can be undefined (empty) during object creation.
    expectation?: string;
    detailedDescription?: string;
    organizer?: string;
    buttonText: string;
};

//export keyword is used before declaration.
export let eventList:eventListInterface[] = [
    {
        id: 1,
        heading: "research bootcamp",
        type: "training",
        description: "yra global research bootcamp 2026",
        date: "20 Aug",
        modeOfLecture: "online",
        duration: "4 weeks",
        regFee: 15000,
        expectation: "Intensive research training for emerging researchers and scholars.",
        buttonText: "Register now →",
        detailedDescription: "Intensive research training designed to equip researchers with essential knowledge and practical skills from idea development to publication.",
        organizer: "YRA Programme"
    },
    {
        id: 2,
        heading: "slr masterclass",
        type: "seminar",
        description: "how to write a systematic literature review",
        date: "30 Aug",
        modeOfLecture: "online",
        duration: "1 day",
        regFee: 5000,
        expectation: "Practical session on systematic literature review and publication.",
        buttonText: "View details →",
        detailedDescription: "Practical session on systematic literature review design, searching, screening, synthesis and publication.",
        organizer: "YRA Programme"
    },
    {
        id: 3,
        heading: "data analysis",
        type: "workshop",
        description: "data analysis with spss for researchers",
        date: "10 Sep",
        modeOfLecture: "online",
        duration: "2 days",
        regFee: 7500,
        expectation: "Hands-on training on data analysis and interpretation.",
        buttonText: "View details →",
        detailedDescription: "Hands-on workshop on selecting, running and interpreting common statistical analyses.",
        organizer: "YRA Programme"
    }
];
