import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

import { IMG_PROJECT1 } from "../assets"

export const HOME = {
  firstName: "Vivek",
  lastName: "Vaibhav",
  logoCharacters: "V",
  subheading: "I'm a Full Stack Developer",
  bio: [
    {
      emoji: "☕",
      text: "Charged by Tea",
    },
    {
      emoji: "🌎",
      text: "Based in the India",
    },
    {
      emoji: "💼",
      text: "Full Stack Developer at Oriserve",
    },
    {
      emoji: "📧",
      text: "vivekvaibhav2324.gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/vivek.2324",
      icon: <FacebookIcon />,
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/__keviv__/",
      icon: <InstagramIcon />,
      label: "instagram",
    },
    {
      link: "https://github.com/vivek1623",
      icon: <GitHubIcon />,
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/vivek-vaibhav-175b14112/",
      icon: <LinkedInIcon />,
      label: "linkedin",
    },
    {
      link: "https://twitter.com/_vivek16",
      icon: <TwitterIcon />,
      label: "twitter",
    },
  ],
}

export const ABOUT = [
  {
    title: "introduction",
    data: [
      { primary: "vivek $", secondary: "cat about-vivek" },
      {
        primary: "about-vivek (main) $",
        secondary:
          "Hello! I'm Vivek. I'm a Full Stack Developer in Oriserve. I studied Computer Science and Engineering at NIT Calicut.",
      },
    ],
  },
  {
    title: "career-objective",
    data: [
      { primary: "vivek $", secondary: "cd ../career-objective" },
      {
        primary: "career-objective (main) $",
        secondary:
          "I want to put to use my creative skills, technologies that I am familiar with, innovative thoughts that will benefit the Organization in the long run and also help me in building my professional career",
      },
    ],
  },
  {
    title: "skills/tools",
    data: [
      { primary: "vivek $", secondary: "cd ../skills/tools" },
      { primary: "skills/tools (main) $", secondary: "ls" },
      { primary: "Proficient With" },
      { secondary: "ReactJs" },
      { secondary: "Redux" },
      { secondary: "ReactNative" },
      { secondary: "NodeJs" },
      { secondary: "HTML" },
      { secondary: "CSS" },
      { primary: "Exposed To" },
      { secondary: "Redis" },
    ],
  },
  {
    title: "experience",
    data: [
      { primary: "vivek $", secondary: "cd ../experience" },
      { primary: "experience (main) $", secondary: "ls" },
      { primary: "ORI Serve", secondary: "March 2018 - present" },
      { primary: "Pole Tech Lab", secondary: "July 2016 - March 2018" },
    ],
  },
  {
    title: "hobbies/interests",
    data: [
      { primary: "vivek $", secondary: "cd hobbies/interests" },
      { primary: "hobbies/interests (main) $", secondary: "ls" },
      { secondary: "📖 reading" },
      { secondary: "🎭 theater" },
      { secondary: "🎥 movies" },
      { secondary: "🌶 cooking" },
    ],
  },
]

export const PORTFOLIO = [
  {
    title: "My Portfolio",
    description: "A simple portfolio to show my basic information",
    deployedUrl: "https://my-portfolio-navy-seven.vercel.app",
    repo: "https://github.com/vivek1623/my-portfolio",
    tags: ["ReactJS", "Material UI"],
    image: IMG_PROJECT1,
  },
  {
    title: "RentoHub",
    description:
      "A vehicle booking application implemented using ReactJS & NodeJS",
    deployedUrl: "#",
    repo: "#",
    tags: ["ReactJS", "NodeJS", "Ant-Design"],
    image: IMG_PROJECT1,
  },
  {
    title: "PicSearch",
    description: "A web application to search any image",
    deployedUrl: "https://vivek1623.github.io/pic-search",
    repo: "https://github.com/vivek1623/pic-search",
    tags: ["ReactJS", "Ant-Design"],
    image: IMG_PROJECT1,
  },
]
