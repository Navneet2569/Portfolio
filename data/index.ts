import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#testimonials" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with my timings",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently I am working on a Patient in the field of Road Safety",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    des: "My personal portfolio, built with Next.js, React.js, Three.js, Framer Motion, and TypeScript, showcases my skills and projects through a dynamic, visually stunning, and type-safe web experience.",
    img: "/Portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Navneet2569/Portfolio",
  },
  {
    id: 2,
    title: "NewsAI",
    des: "NewsAI is a project I developed using AlanAI, React, TypeScript, and TailwindCSS, showcasing an innovative, type-safe, and stylish application for voice-controlled news delivery and user interaction.",
    img: "/NewsAI.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/re.svg",
      "/icons8-javascript.svg",
    ],
    link: "https://github.com/Navneet2569",
  },
  {
    id: 3,
    title: "CrowdFunding",
    des: "CrowdFunding is a website I developed to raise funds for campaigns using Web3 and blockchain, built with React, Next.js, Three.js, and TypeScript, showcasing a secure, interactive, and type-safe crowdfunding platform.",
    img: "/Crowdfunding.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/next.svg"],
    link: "https://github.com/Navneet2569",
  },
  {
    id: 4,
    title: "AniX",
    des: "AniX is a modern Next.js 14 server-side app I built featuring server actions, infinite scroll, and Framer Motion animations, designed for a seamless, dynamic, and engaging user experience.",
    img: "/AniX.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Navneet2569",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "HTML",
    img: "/icons8-html-480.svg",
    nameImg: "/htmlName.svg",
  },
  {
    id: 2,
    name: "CSS",
    img: "/icons8-css.svg",
    nameImg: "/cssName.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "/icons8-javascript.svg",
    nameImg: "/jsName.svg",
  },
  {
    id: 4,
    name: "Java",
    img: "/icons8-java.svg",
    nameImg: "/javaName.svg",
  },
  {
    id: 5,
    name: "ReactJS",
    img: "/re.svg",
    nameImg: "/reactName.svg",
  },
  {
    id: 6,
    name: "NodeJS",
    img: "/node-js.svg",
    nameImg: "/nodeName.svg",
  },
  {
    id: 7,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "/mongoName.svg",
  },
  {
    id: 8,
    name: "Express",
    img: "/express.svg",
    nameImg: "/exName.svg",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    img: "/tail.svg",
    nameImg: "/tailName.svg",
  },
  {
    id: 10,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/tsName.svg",
  },
  {
    id: 11,
    name: "Git",
    img: "/git1.svg",
    nameImg: "/gitName.svg",
  },
  {
    id: 12,
    name: "GitHub",
    img: "/github.svg",
    nameImg: "/gbName.svg",
  },
  {
    id: 13,
    name: "NextJS",
    img: "/next.svg",
    nameImg: "/nextName.svg",
  },
  {
    id: 14,
    name: "ThreeJS",
    img: "/three.svg",
    nameImg: "/threeName.svg",
  },
  {
    id: 15,
    name: "Firebase",
    img: "/firebase.svg",
    nameImg: "/fireName.svg",
  },
  {
    id: 16,
    name: "MySQL",
    img: "/mysql.svg",
    nameImg: "/mqlName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Secondary Education",
    desc: "I am proud to have completed my secondary education from Sachdeva Millennium School with a efficient 84% aggregate score. This achievement marks a significant milestone in my academic journey, and I am excited to take on new challenges ahead.",
    duration: "2017-2018",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Senior Secondary Education",
    desc: "I successfully completed my Senior Secondary Education from Sachdeva Millennium School, achieving an commendable 82% aggregate score. This accomplishment has not only honed my skills but also instilled in me the confidence to pursue my higher education goals.",
    duration: "2019-2020",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Undergraduation",
    desc: "I am currently pursuing my Bachelor of Technology in Computer Science and Engineering (B.Tech CSE) from Maharishi Markandeshwar (Deemed to be) University, which I commenced in 2021 and am expected to complete by 2025. This undergraduate program has provided me with a dynamic learning environment, enabling me to develop my technical skills and knowledge in the field of computer science.",
    duration: "2021-2025",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Navneet2569",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Nav__Singh11",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/navneet-singh-8ba02226a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
