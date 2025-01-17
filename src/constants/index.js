import project1 from "../assets/projects/project-1.svg";
import project2 from "../assets/projects/project-2.svg";
import project3 from "../assets/projects/project-3.svg";
import project4 from "../assets/projects/project-4.svg";

export const HERO_CONTENT = `Hey! I'm a Full-stack Developer who loves turning ideas into reality through code. Fresh out of Strathclyde with a Software Development degree, I bring a unique mix of tech skills and business thinking to every project. Currently crafting AI-powered educational tools and building cool stuff with React, Next.js, and Node.js. When I'm not geeking out over new tech, I'm probably experimenting with cloud platforms or dreaming up the next big web app. I'm all about creating sleek interfaces and robust systems that not only work great but also make a real difference.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Graduate Software Developer",
    company: "Reality AI Lab",
    description: `Developing innovative AI tools like Marvel AI (Teaching Assistant) and Sky AI (Career Coach) to enhance education and career growth globally. Skilled in building user-friendly interfaces with ReactJS, integrating back-end services with Node.js and Python, and deploying on Google Cloud Run for seamless user experiences. Proficient in managing databases like Firestore, Firebase, and Redis, optimising workflows, and ensuring system reliability with testing tools like LogRocket. Experienced in CI/CD automation with GitHub Actions and collaborative development using GitHub.`,
    technologies: ["React.js", "Next.js", "Node.js", "Python", "Firebase", "Google Cloud"],
  },
  {
    year: "2022 - 2024",
    role: "Front-End Developer & Founder",
    company: "Magle Digital",
    description: `At Magle, we helped brands connect with their customers through personalised digital experiences. Our services included web development and 360-degree marketing campaigns, leveraging top advertising and social media platforms to engage and influence consumers. Many of our clients stayed loyal partners throughout.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
  {
    year: "2021 - 2022",
    role: "Front-End Developer",
    company: "Techsbeyond Tech. Sol.",
    description: `Designed and established user-friendly websites, including optimized check-out page, resulting in a 25% increase in user clicks and subsequently 33% in customer purchases.`,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "SaSS"],
  },
  {
    year: "2021",
    role: "Business Development Executive",
    company: "Zixdo",
    description: `At Zixdo Pvt Ltd, a leading car wash company, I successfully opened three franchise outlets in one of India's largest metropolitan cities within a week of joining. My role involved pitching to potential customers, building strong relationships, managing their concerns, and coordinating with the company's leadership to deliver solutions. Additionally, I assisted franchise owners in crafting effective marketing strategies to boost visibility and drive bookings.`,
    technologies: ["Business Development", "Client Relationship Management", "Strategic Marketing", "Operational Coordination"],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone",
    image: project1,
    description:
      `Developed a Netflix clone using React and Firebase,
      integrating TMDB API for movie data and implementing secure user authentication.`,
    technologies: ["JavaScript", "React", "Tailwind CSS", "API", "Firebase"],
    githubLink: "https://github.com/SaroshAhmad/Netflix_Clone",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      `Role-based dashboards for
      employees and admins, where tasks can be assigned, viewed, and updated. I used React's
      useState and Context API to handle state and local Storage to maintain user sessions. The
      app supports task assignment, tracking, and completion, providing a streamlined workflow for
      managing daily responsibilities.`,
    technologies: ["React", "JSX", "CSS"],
    githubLink: "https://github.com/SaroshAhmad/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubLink: "https://github.com/SaroshAhmad/My_Portfolio",
  },
  {
    title: "Smart Home Automation System ",
    image: project4,
    description:
      `Created a
      microservice-based smart home system using Spring Boot, Angular, and MySQL, automating
      tasks like lighting and security.`,
    technologies: ["Java", "SpringBoot", "Angular", "MySQL", "Tomcat"],
    githubLink: "https://github.com/SaroshAhmad/smart-home-automation",
  },
];

export const CONTACT = {
  address: "Augustus Road, Birmingham, B15 3NB, UK ",
  phoneNo: "+44 7436659548 ",
  email: "ahmadsarosh07@gmail.com",
};
