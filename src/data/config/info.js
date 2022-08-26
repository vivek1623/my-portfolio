import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import { IMG_PROJECT1} from "../assets"

export const HOME = {
  firstName: "Vivek",
  lastName: "Vaibhav",
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
      { primary: "vivek $", secondary: "cat aboutvivek" },
      {
        primary: "aboutvivek (main) $",
        secondary:
          "Hello! I'm Vivek. I'm a Full Stack Developer in Oriserve. I studied CompScience at NIT Calicut.",
      },
    ],
  },
  {
    title: "skills-and-tools",
    data: [
      { primary: "vivek $", secondary: "cd skills/tools" },
      { primary: "skills/tools (main) $", secondary: "ls" },
      { primary: "Proficient With" },
      { secondary: "ReactJs" },
      { secondary: "Redux" },
      { secondary: "NodeJs" },
      { secondary: "HTML" },
      { primary: "Exposed To" },
      { secondary: "Redis" },
    ],
  },
  {
    title: "hobbies-and-interests",
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
    title: "RentoHub",
    description: "A vehicle booking application implemented using ReactJS & NodeJS",
    deployedUrl: "https://paytonpierce.dev",
    repo: "https://github.com/paytonjewell",
    image: IMG_PROJECT1
  },
  {
    title: "Project 2",
    deployedUrl: "https://paytonpierce.dev",
    repo: "https://github.com/paytonjewell",
    image: IMG_PROJECT1,
  },
  {
    title: "Project 3",
    deployedUrl: "https://paytonpierce.dev",
    repo: "https://github.com/paytonjewell",
    image: IMG_PROJECT1,
  },
  {
    title: "Project 4",
    deployedUrl: "https://paytonpierce.dev",
    repo: "https://github.com/paytonjewell",
    image: IMG_PROJECT1,
  },
  {
    title: "Project 5",
    deployedUrl: "https://paytonpierce.dev",
    repo: "https://github.com/paytonjewell",
    image: IMG_PROJECT1,
  },
]
