import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    java,
    python,
    django,
    djangorf,
    postgresql,
    aws,
    fivehead,
    openbootcamp,
    IESLeonardoDaVinci,
    aoetwo,
    fullstackopen,
    twitch,
    spring,
    godot,
    docker,
    redis,
    dynamodb,
    sql,
    dotnet,
    csharp,
    malinimar,
    pdfpro,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
        {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
        {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
        {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
        {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },


    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
{
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
        {
        imageUrl: dotnet,
        name: ".NET",
        type: "Backend",
    },
        {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
        {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
        {
        imageUrl: dynamodb,
        name: "DynamoDB",
        type: "Database",
    },
        {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },


    {
        imageUrl: aws,
        name: "AWS",
        type: "Hosting",
    },
        {
        imageUrl: godot,
        name: "Godot",
        type: "Game Engine",
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Bobovino',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rodrigo-martinez-tabernero',
    }
];

export const experiences = [
    {
        title: "Bootcamp Student",
        company_name: "Openbootcamp/Freecodecamp",
        icon: openbootcamp,
        iconBg: "white",
        date: "Jan 2023 - Sep 2023",
        points: [
            "Developing web applications using React.js, Django and other related technologies.",
            "Collaborating with other students making colaborative projects, learning Kanban and Scrum for CI/CD and code reviewing",
            "Learning key industry technologies like containerization with Docker, Docker-compose, Git, Github, Github Actions... ",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Guessdraft",
        icon: fivehead,
        iconBg: "white",
        date: "Sep 2023 - 2024",
        points: [
            "Developing my own side project web applications using React.js, NextJS , Django, and AWS.",
            "Designing a good user experience, backend microservices and a frontend to create a high-quality product",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Currently designing an attractive design for the frontend, to achieve both a visually attractive and clockwork functional service",
            
        ],
    },
{
    title: "Formación Profesional Student",
    company_name: "I.E.S Leonardo Da Vinci",
    icon: IESLeonardoDaVinci,
    iconBg: "white",
    date: "Oct 2024 - Present",
    points: [
        "Learning to design, develop, and maintain multiplatform applications using languages such as Java, Python, and SQL.",
        "Gaining experience in database management, including relational and non-relational databases.",
        "Developing desktop, web, and mobile applications following best practices in software engineering.",
        "Collaborating in team projects using version control systems like Git and applying agile methodologies.",
        "Understanding the fundamentals of systems integration, deployment, and application security."
    ],
},
];



export const projects = [    
        {
        iconUrl: malinimar,
        theme: 'btn-back-red',
        name: 'Malinimar',
        description: "A book translator that can translate to 200+ languages. It uses OpusMT. The link leads to a library of books I already translated",
        link: 'https://malinimar.com',
    },
            {
        iconUrl: pdfpro,
        theme: 'btn-back-red',
        name: 'PDF to OCR project',
        description: "A freelance project where I had to make the frontend of a PDF to OCR converter. It uses React and Tesseract",
        link: 'https://pdfpro.net',
    },
            {
        iconUrl: spring,
        theme: 'btn-back-red',
        name: 'Spring project',
        description: "Basic Spring project to learn the framework. It has a simple CRUD with a SQL database",
        link: 'https://guessdraft.lol',
    },

        {
        iconUrl: twitch,
        theme: 'btn-back-red',
        name: 'Elprofesergio',
        description: "A website I made for a twitch streamer. It dynamically shows his latest videos, sponsors, streams and social media links",
        link: 'https://elprofesergio.com',
    },    
    {
        iconUrl: fivehead,
        theme: 'btn-back-red',
        name: 'Guessdraft',
        description: "Esports draft predictions website. Choose a match, guess side selection and predict the champ select like a professional coach/analyst would do",
        link: 'https://guessdraft.lol',
    },
    {
        iconUrl: IESLeonardoDaVinci,
        theme: 'btn-back-red',
        name: 'DAM',
        description: "Repository of the projects and exercises done in the I.E.S Leonardo Da Vinci, where I'm currently studying a full-stack development degree",
        link: 'https://github.com/Bobovino/DAM',
    },
    {
        iconUrl: openbootcamp,
        theme: 'btn-back-blue',
        name: 'Openbootcamp full-stack bootcamp',
        description: "A full-stack bootcamp repository of most of the exercises completed. Learned HTML, CSS(Bootstrap), Java, Javascript, Python, React, Django... ",
        link: 'https://github.com/Bobovino/OpenBootcamp',
    },
    {
        iconUrl: fullstackopen,
        theme: 'btn-back-pink',
        name: 'Full stack Javascript course',
        description: "A javascript course of a finnish university I'm working on. It teaches you javascript, nodejs, javascript, react, etc...",
        link: 'https://github.com/Bobovino/FullStackOpen',
    },
    {
        iconUrl: aoetwo,
        theme: 'btn-back-black',
        name: 'AOE2 mod',
        description: 'Just a mod for a real time strategy game to place the resources at the bottom of the screen to see them better',
        link: 'https://github.com/Bobovino/Aoe2ResourcesBot',
    },
    {
        iconUrl: twitch,
        theme: 'btn-back-yellow',
        name: 'Redeem twitch channel points',
        description: "Just a script that spams twitch redeem buttons without clicking based on their xPath. It let's you redeem a maximum of 5/10 times",
        link: 'https://github.com/Bobovino/TwitchScripts',
    }
];
