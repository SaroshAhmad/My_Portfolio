import project1 from "../assets/projects/project-1.svg";
import project2 from "../assets/projects/project-2.svg";
import project3 from "../assets/projects/project-3.svg";
import project4 from "../assets/projects/project-4.svg";
import project6 from "../assets/projects/project-6.svg";

export const HERO_CONTENT = `Hey! I'm a Full-Stack Developer with a Software Development degree from Strathclyde. I enjoy building web applications that are both functional and user-friendly. Right now, I’m working on AI-powered educational tools and developing projects using React, Next.js, and Node.js.

I’ve built this website using React, Firebase, Tailwind CSS, and Framer Motion, focusing on smooth performance and great user experience. I like experimenting with cloud platforms and improving my skills by working on real-world projects. My goal is to create applications that solve problems and add value.`;

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
    title: "Full-Stack Twitter Clone",
    image: project6,
    description:
      `Building a modern social media platform from the ground up using the MERN stack`,
    fullDescription: `Developed a feature-rich Twitter clone that replicates core social media functionalities using modern web technologies. This full-stack application was built using React.js for the frontend, Express.js and Node.js for the backend API, and MongoDB for data persistence. Key Features:

    Real-time tweet feed with create, read, update, and delete capabilities
    User authentication and authorization with JWT tokens
    User profiles with customizable avatars and bio information
    Follow/unfollow functionality to curate personalized feeds
    Like and retweet interactions
    Responsive design optimized for both desktop and mobile devices
    Image upload and sharing capabilities
    Real-time notifications using WebSocket technology`,
    technologies: ["JavaScript", "React", "Tailwind CSS", "API", "MongoDB", "Express.js", "Node.js"],
    githubLink: "https://github.com/SaroshAhmad/Twitter-Clone",
    status: "In Progress",
    categories: ["Full Stack", "Web Development"],
  },
  {
    title: "Netflix Clone",
    image: project1,
    description:
      `Developed a Netflix clone using React and Firebase,
      integrating TMDB API for movie data and implementing secure user authentication.`,
    fullDescription: `The Netflix clone is a web application built with React.js that replicates core Netflix features. Firebase handles user authentication and backend services, while the TMDB API provides real-time movie and TV show data. Users can create accounts, browse through categorized content (Trending, Top Rated, etc.), and search for specific titles. The interface features a dynamic hero banner, smooth-scrolling movie rows, and expandable movie cards that reveal additional information on hover. The application is responsive across all devices and employs modern web practices like lazy loading and API caching for optimal performance. React Context API manages the application state, while custom hooks handle data fetching and user interactions. The result is a polished streaming platform that demonstrates practical implementation of modern web technologies.`,
    technologies: ["JavaScript", "React", "Tailwind CSS", "API", "Firebase"],
    githubLink: "https://github.com/SaroshAhmad/Netflix_Clone",
    status: "Completed",
    categories: ["Full Stack", "Web Development"],
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
    fullDescription: `The Task Management App is a practical web application built with React.js that streamlines task organization within teams. The app features distinct dashboards for both employees and administrators, enabling efficient task management and tracking. Using React's useState and Context API for state management, the application maintains a responsive and synchronized user interface across different roles.
    Administrators can create and assign tasks to team members, set deadlines, and monitor progress through an intuitive dashboard. Employees have their personalized view where they can see assigned tasks, update their status, and mark them as complete. The app utilizes local storage to maintain user sessions and task data, ensuring persistence across browser sessions without requiring a backend server.
    Key features include task filtering by status and assignee, deadline tracking with visual indicators, and a simple yet effective notification system for task updates. The interface is built with modern React components, emphasizing clean design and ease of use. State management through Context API eliminates prop drilling and maintains a single source of truth for task data, while useState handles component-level interactions. This project demonstrates practical implementation of React's core features to create a functional, real-world application for everyday task management.`,
    technologies: ["React", "JSX", "CSS"],
    githubLink: "https://github.com/SaroshAhmad/",
    status: "Completed",
    categories: ["Front End"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    fullDescription: `The portfolio is a modern, responsive web application built with React.js, featuring a sleek dark theme with elegant cyan accents and gradient effects. The website design emphasizes a clean, grid-based layout with smooth animations powered by Framer Motion, creating an engaging user experience. The hero section makes a strong first impression with an animated profile image and text reveal effects, while maintaining professional typography and spacing.
    The site includes dedicated sections for showcasing technologies, projects, professional experience, and a contact form. Each component is thoughtfully animated using custom easing curves for smooth transitions. The background features a subtle grid pattern with a radial gradient overlay, adding depth while maintaining readability. The website is fully responsive, adapting seamlessly from mobile to desktop views through Tailwind CSS utility classes.
    Notable technical implementations include smooth scrolling navigation, responsive image handling, and optimized performance through modern React practices. The addition of a blog section with individual post pages demonstrates the site's scalability for content management. Overall, the portfolio effectively balances modern design elements with professional presentation to showcase both technical expertise and attention to detail.`,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubLink: "https://github.com/SaroshAhmad/My_Portfolio",
    status: "Completed",
    categories: ["Full Stack", "Web Development"],
  },
  {
    title: "Smart Home Automation System ",
    image: project4,
    description:
      `Created a
      microservice-based smart home system using Spring Boot, Angular, and MySQL, automating
      tasks like lighting and security.`,
    fullDescription: `Built a microservice-based smart home automation system using Spring Boot, Angular, and MySQL. The system enables users to automate and control various home functions, including lighting, security, and temperature, through a user-friendly interface. Each service, such as lighting control and security management, operates independently, ensuring scalability and maintainability. The backend is powered by Spring Boot for efficient service handling, while Angular provides an intuitive front-end. MySQL is used for data storage, allowing for real-time updates and secure management of user preferences and system settings.`,
    technologies: ["Microservice", "Java", "SpringBoot", "Angular", "MySQL", "Tomcat"],
    githubLink: "https://github.com/SaroshAhmad/smart-home-automation",
    status: "Completed",
    categories: ["Full Stack", "Web Development"],
  },
];

export const CONTACT = {
  address: "Birmingham, United Kingdom 🇬🇧 ",
  phoneNo: "+44 7436659548 ",
  email: "ahmadsarosh07@gmail.com",
};
