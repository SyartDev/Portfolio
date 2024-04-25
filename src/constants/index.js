import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    python,
    udemy,
    nodejs,
    website,
    snakegame,
    password,
    react
} from "../assets/images";


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
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "",
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

];

export const knowledge = [
    {
        title: "Udemy Cours",
        subtitle: "The Complete 2024 Web Development Bootcamp",
        icon: udemy,
        iconBg: "#accbe1",
        date: "2023",
        points: [
            "Learning modern web development skills including HTML, CSS and Javascrpt.",
            "Implementing responsive design principles to ensure optimal user experience across devices.",
          ],
    },
    {
        title: "Udemy Cours",
        subtitle: "100 Days of Code",
        icon: udemy,
        iconBg: "#accbe1",
        date: "2024",
        points: [
            "100 Days of Code in Python.",
            "Practicing Python programming through hands-on coding exercises.",
            
          ],
    },
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
        link: 'https://github.com/syartdev',
    }
];

export const projects = [

    {
        iconUrl: website,
        theme: 'btn-back-black',
        name: 'My Portfolio',
        description: 'My Portfolio that your watching right now.',
        link: 'https://github.com/syartdev/portfolio',
    },
    {
        iconUrl: snakegame,
        theme: 'btn-back-black',
        name: 'Snake Game',
        description: 'Snake Game build in Python.',
        link: 'https://github.com/SyartDev/Snake-Game',
    },
    {
        iconUrl: password,
        theme: 'btn-back-black',
        name: 'Password Generator',
        description: 'Passwort Generator whit Letters, Numbers and Symbols.',
        link: 'https://github.com/SyartDev/Password-Generator',
    },
];