import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    django,
    djangorf,
    postgresql,
    aws,
    fivehead,
    openbootcamp,
    aoetwo,
    fullstackopen,
    twitch
} from "../assets/icons";

export const skills = [
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
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
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
        imageUrl: djangorf,
        name: "DjangoRestFramework",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Hosting",
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
        company_name: "5Head",
        icon: fivehead,
        iconBg: "white",
        date: "Sep 2023 - Present",
        points: [
            "Developing my own side project web applications using React.js, NextJS , Django, and AWS.",
            "Designing a good user experience, backend microservices and a frontend to create a high-quality product",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Currently designing an attractive design for the frontend, to achieve both a visually attractive and clockwork functional service",
            
        ],
    },
];



export const projects = [
    {
        iconUrl: fivehead,
        theme: 'btn-back-red',
        name: '5head',
        description: "Esports draft predictions website. Choose a match, guess side selection and predict the champ select like a professional coach/analyst would do",
        link: 'https://5head.lol',
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
