import {
  uoftlogo,
  gdsc,
  iris,
  ecell,
  genesis,
  uoft,
  chess,
  rogers,
  devfolio,
  ontparks,
  recsyslogo,
  wb,
  music,
  terminal
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiIpfs,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiAssemblyscript,
  SiNodedotjs,
  SiReactrouter,
  SiAxios,
  SiCss3,
  SiVercel,
  SiHtml5,
  SiFirebase,
} from "react-icons/si";


import { FaDatabase, FaMusic, FaTerminal } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { DiCss3, DiJava, DiSqllite } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/file/d/1scrgYHd-LtrxbKS-x5r-qKijoOxsT1h9/view?usp=sharing";
export const repoLink = "https://github.com/Ansh757/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/anshmalhotra";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: uoftlogo,
    title: "University of Toronto",
    degree: "Bachelor of Science",
    duration: "December 2020 - May 2024",
    content1: "Specialization: Computer Science",
    content2: "Graduated with Honours",
  },
];

// // Add your past achievements here for example - rankings in hackathons/events
// export const achievements = [
//   {
//     id: "a-1",
//     icon: ethindia,
//     event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
//     position: "Winner",
//     content1: "Top 10 Overall Finalists/Winners, True Network's Winner",
//     content2: "Polkadot's 1st Runner Up, Lit Protocol's 2nd Runner Up",
//     content3: "Coinbase Pool Prize, Base Top 10",
//     article:
//       "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
//     project: "https://devfolio.co/projects/khoj-3336",
//     youtube:
//       "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
//   },
//   {
//     id: "a-2",
//     icon: ethglobal,
//     event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
//     position: "Winner",
//     content1: "Top 12 Winners among 20k+ registrations",
//     content2: "One of Polygon's Best Public Goods",
//     content3: "Best Module on Biconomy SDK",
//     article:
//       "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
//     project: "https://devfolio.co/projects/chargeswap-3527",
//     youtube: "https://youtu.be/9rieTya8Yds?t=3908",
//   },
//   {
//     id: "a-3",
//     icon: polkadot,
//     event: "Polkadot Hackathon: Europe Edition",
//     position: "2nd Runner Up in the ink! Smart Contract Category",
//     content1:
//       "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
//     content2: "",
//     content3: "",
//     article:
//       "https://www.linkedin.com/posts/mittal-parth_hackathon-winners-web3-activity-7048340759116214272-eJvo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOa76QB7zljgX8NK4xVSZXi0Z49ETMeC-g",
//     github: "https://github.com/pranav2305/GreenTrust",
//   },
//   {
//     id: "a-4",
//     icon: lightspeed,
//     event: "Warpspeed by Lightspeed",
//     position: "1st Runner Up",
//     content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
//     content2: "Top 3 projects using Replit",
//     content3: "1st Runner Up by Amazon Web Services (AWS)",
//     article: "https://shorturl.at/fhjsT",
//   },
//   {
//     id: "a-5",
//     icon: globalAi,
//     event: "Global AI HackFest 2023",
//     position: "Winner",
//     content1:
//       "1st Position in the Education, Finance & Tech track by AI Planet",
//     content2: "",
//     content3: "",
//     article:
//       "https://www.linkedin.com/posts/mittal-parth_happy-to-share-that-comicifyai-emerged-as-activity-7078790186435833856-88fh",
//   },
//   {
//     id: "a-6",
//     icon: dennisivy,
//     event: "September Hackathon by Dennis Ivy",
//     position: "Winner",
//     content1:
//       "Rated the best portfolio website among 450+ participants across the globe.",
//     content2: "",
//     content3: "",
//     youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
//     project: "https://parthmittal.netlify.app/",
//   },
//   {
//     id: "a-7",
//     icon: manipal,
//     event: "Manipal Hackathon'22",
//     position: "Consolation Prize",
//     content1: "Top 10 among 500+ teams across India",
//     content2:
//       "Developed a cross-platform mobile application to address the problem of social cohesion.",
//     content3: "",
//     article: "https://shorturl.at/exEIQ",
//   },
//   {
//     id: "a-8",
//     icon: icon,
//     event: "ICON Hyperbuild Hackathon",
//     position: "Honorable Mention",
//     content1:
//       "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
//     content2: "",
//     content3: "",
//     project: "https://devpost.com/software/green-trust-xj2w6g",
//   },
//   {
//     id: "a-9",
//     icon: ethforall,
//     event: "ETHForAll 2023",
//     position: "Top 3 Superfluid Projects",
//     content1:
//       "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
//     content2: "",
//     content3: "",
//     project: "https://devfolio.co/projects/green-trust-ed14",
//   },
// ];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-5",
        icon: DiSqllite,
        name: "SQL",
      },
      {
        id: "pl-6",
        icon: FaDatabase,
        name: "R",
      },
      {
        id: "pl-7",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-8",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-9",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-10",
        icon: SiAssemblyscript,
        name: "Assembly",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-3",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "f-4",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-6",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-7",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-8",
        icon: SiReactrouter,
        name: "React Router",
      },
      {
        id: "f-9",
        icon: SiAxios,
        name: "Axios",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiGooglecloud,
        name: "Google Cloud",
      },
      {
        id: "t-1",
        icon: VscAzure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: FaTerminal,
        name: "Shell Scripts",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "University of Toronto",
    logo: uoft,
    link: "",
    positions: [
      {
        title: "Full Stack Developer Intern",  
        tags: ["React", "Firebase", "OpenAI", "CI/CD", "Cypress", "Mentorship"],
        description: "Developed a wellness platform for UofT students with daily check-ins, avatar customization, email automation, and AI chatbot support.",
        duration: "Sept 2023 - Dec 2024",
        content: [
          {
            text: "Optimized rendering, cloud functions, and Firestore queries for faster performance.",
            link: "",
          },
          {
            text:    "Implemented OpenAI-powered chatbot for personalized mental health feedback.",
            link: "",
          },
          {
            text: "Led frontend mentoring for 3rd-year students on component design and best practices.",
            link: "",
          },
          {
            text: "Deployed with CI/CD using GitHub and Firebase Hosting with automated testing (Cypress/Unit).",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Rogers Communications",
    logo: rogers,
    link: "",
    positions: [
      {
        title: "Cloud Engineering Intern",
        description: "Worked on application support, CI/CD pipelines, and Azure cloud services.",
        tags: ["Azure", "CI/CD", "JIRA", "DevOps", "Cloud Servicese"],
        duration: "May 2023 - Aug 2023",
        content: [
          {
            text: "Managed JIRA tickets to support Application Teams with accurate resolutions and high-priority support.",
            link: "",
          },
          {
            text: "Automated builds and deployments via Azure DevOps, Git, and CI/CD pipelines.",
            link: "",
          },
          {
            text: "Estimated Azure Cloud costs using HLDs to inform app teams of architectural impact.",
            link: "",
          },
          {
            text: "Used Azure services such as Cosmos DB, AKS, VMs, Databricks, AML, and Cognitive Search.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Coming soon!",
    github: "",
    link: "",
    image: "",
    content:
      "Stay Tuned.",
    stack: [
      // {
      //   id: "icon-1",
      //   icon: SiDotnet,
      //   name: "Dot Net Core MVC 6",
      // },
      // {
      //   id: "icon-2",
      //   icon: SiBootstrap,
      //   name: "Bootstrap",
      // },
      // {
      //   id: "icon-3",
      //   icon: DiMsqlServer,
      //   name: "MS Sql Server",
      // },
      // {
      //   id: "icon-4",
      //   icon: SiJquery,
      //   name: "jQuery",
      // },
      // {
      //   id: "icon-5",
      //   icon: SiTwilio,
      //   name: "Twillio",
      // },
    ],
  },
  {
    id: "project-2",
    title: "Coming Soon!",
    github: "",
    link: "",
    image: "",
    content:
      "Stay Tuned.",
    stack: [
      // {
      //   id: "icon-1",
      //   icon: SiReact,
      //   name: "React",
      // },
      // {
      //   id: "icon-3",
      //   icon: SiWeb3Dotjs,
      //   name: "Web3.js",
      // },
      // {
      //   id: "icon-4",
      //   icon: SiSolidity,
      //   name: "Solidity",
      // },
      // {
      //   id: "icon-5",
      //   icon: FaHardHat,
      //   name: "HardHat",
      // },
      // {
      //   id: "icon-6",
      //   icon: SiIpfs,
      //   name: "IPFS",
      // },
      // {
      //   id: "icon-7",
      //   icon: SiArduino,
      //   name: "Arduino",
      // },
      // {
      //   id: "icon-8",
      //   icon: IoIosNotificationsOutline,
      //   name: "Push Protocol",
      // },
    ],
  },
  {
    id: "project-3",
    title: "Wellbeing WebApp",
    github: "",
    link: "",
    image: wb,
    content:
      "A web-based mental health platform designed to support students through daily check-ins and personalized AI chatbot interactions. Features include email reminders, avatar customization, and motivational feedback. Made with a multidisciplinary team to promote engagement and well-being.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiGooglecloud,
        name: "Google Cloud",
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "icon-5",
        icon: SiOpenai,
        name: "OpenAI API",
      },
    ],
  },
  {
    id: "project-4",
    title: "Recommendation System",
    github: "https://github.com/Ansh757/final-project-csc111",
    link: "",
    image: recsyslogo,
    content:
      "Designed a system to help users find movies from a large dataset using filters like genre and rating. Includes customizable options, basic recommendation logic, and a simple GUI. Built as a school project.",
    stack: [
      {
        id: "icon-2",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-5",
    title: "My Guided Hikes",
    github: "",
    link: "https://myguidedhike.vercel.app/",
    image: ontparks,
    content:
      "Built an interactive GPS-enabled map to guide users through Ontario Arrowhead Park. Integrated location-based features that let users explore, learn about landmarks and wildlife, and access educational content in real-time as they move through the park.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-5",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  },
  {
    id: "project-6",
    title: "Media Manager",
    github: "https://github.com/Ansh757/media-manager",
    link: "",
    image: music,
    content:
      "A personal web-based application to organize, browse, and play your music collection. Includes features like playlist creation, track filtering, and metadata editing in a simple, responsive interface. Built to streamline music management and provide a clean, user-friendly listening experience.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-3",
        icon: SiFlask,
        name: "Flask",
      },
    ],
  },
  {
    id: "project-7",
    title: "Cmd Line Game",
    github: "https://github.com/Ansh757/Rajans-Conquest",
    link: "",
    image: terminal,
    content:
      "Built an interactive narrative game set in ancient India where players manage a province, make tactical decisions, and compete for territory. Features include game state saving/loading, branching story events, and modular design for future expansion.",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    id: "project-8",
    title: "MiniChess",
    github: "",
    link: "",
    image: chess,
    content:
      "Developed intelligent algorithms to solve a simplified chess variant. Focused on move evaluation and game-tree logic, while working within a provided GUI framework.",
    stack: [
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/anshmalhotra",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Ansh757",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:anshmalhotra2511@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Ansh Malhotra",
  githubUsername: "Ansh757",
  tagLine:
    "Full-Stack & Cloud Dev | H.BSc @ UofT | Interned @ UofT & Rogers",
  intro:
    "Passionate about my work and technology-related projects — looking to build meaningful solutions, grow as a developer, and contribute to impactful teams.",
};

// // The maximum number of PRs to be displayed in the Open Source Contributions section.
// export const itemsToFetch = 20;

// // Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
// export const includedRepos = [
//   "publiclab/plots2",
//   "zulip/zulip",
//   "paritytech/polkadot-sdk",
// ];
