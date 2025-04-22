import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a front-end developer with 2 years of hands-on experience building responsive and dynamic web applications using React.js and JavaScript. I specialize in crafting user-friendly interfaces with technologies like Tailwind CSS, Redux Toolkit, and Vite. With a strong eye for design and performance optimization, I’ve developed scalable apps for both web and mobile platforms. I'm passionate about clean code, intuitive UI/UX, and continuous learning to stay current with evolving frontend trends.`;

export const ABOUT_TEXT = `I’m a detail-oriented frontend developer with 2 years of experience building intuitive and responsive applications for web and mobile. At IB Group, I contributed to mobile apps used by thousands of poultry farmers and sales teams across India using Flutter/Dart. On the web side, I’ve built production-grade projects with React.js, Redux Toolkit, Tailwind CSS, and Vite, with a strong focus on performance and accessibility. I thrive in fast-paced, collaborative environments where I can solve problems, create impactful experiences, and continually grow my skills. Outside of work, I enjoy learning new tools and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Mar 2023 – Present",
    role: "Frontend Developer",
    company: "IB Group, Rajnandgaon, Chhattisgarh",
    description: `Worked on the end-to-end development of mobile applications and web platforms using Flutter and React.js for the poultry farming and agri-business domain. Delivered production-ready solutions currently live on the Google Play Store and official platforms.`,
    technologies: [
      "Flutter",
      "Dart",
      "UI/UX",
      "Play Store Deployment",
      "Firebase",
      "Google Maps API",
      "React.js",
      "Tailwind CSS",
    ],
    projects: [
      "• ABIS DigitalFlockbook: Developed a mobile app for poultry farmers, currently used by 10,000+ users across India. Focused on intuitive UI/UX, smooth navigation, and robust performance across devices.",
      "• ABIS Digital Sales: Led the front-end development of an app for managing bird sales, order processing, and quotations. Delivered seamless UI and launched it successfully on the Play Store with excellent user adoption.",
      "• ABIS Digital Farmer Onboarding: Built a farmer self-onboarding app with Aadhaar-based e-sign verification, location tracking, and referral features for registered farmers. Streamlined the onboarding process and increased farmer participation.",
      "• IB Group Official Website: Contributed to the development of the company's official website using React.js and Tailwind CSS. Focused on responsiveness, performance optimization, and brand-consistent UI/UX design.",
    ],
  },
  {
    year: "Jan 2023 – Mar 2023",
    role: "Frontend Developer (Freelance)",
    company: "Purple Maze, India",
    description: `Built a marketing-focused website that increased business growth by 40%. Integrated promotional videos and reels to showcase strategies for consumer product promotions.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Food Delivery Website",
    image: project1,
    description:
      "Built a modern, mobile-friendly food delivery website with real-time Swiggy API integration, infinite scroll, and custom hooks. Achieved Google Lighthouse score of 99 with Vite optimizations.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
  },
  {
    title: "What GPT3 OpenAI",
    image: project2,
    description:
      "Created a responsive, GPT-3 powered UI for enhanced user interaction. Focused on clean UI across devices with consistent rendering using React.js.",
    technologies: ["React", "CSS", "JavaScript", "OpenAI API"],
  },
  {
    title: "Shoplane Website",
    image: project3,
    description:
      "Developed an e-commerce platform with product listing, cart, filtering, and online payment. Designed for seamless UX across devices with Redux state management.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    title: "Purple Maze Website",
    image: project4,
    description:
      "Freelance project for a marketing agency to showcase strategy videos and reels. Delivered performance-optimized frontend that led to 40% business growth.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Bangalore",
  phoneNo: "+91 8770275989",
  email: "sudhalohani1@gmail.com",
};
