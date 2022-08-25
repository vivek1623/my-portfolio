import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

export const INFO = {
  firstName: "Vivek",
  lastName: "Vaibhav",
  subheading: "I'm a Full Stack Developer",
  intro:
    "Hello! I'm Vivek. I'm a senior fullstack developer for Oriserve. I studied CompSci at NIT Calicut, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
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
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Project 1",
      deployedUrl: "https://paytonpierce.dev",
      repo: "https://github.com/paytonjewell",
      // image: mock1,
    },
    {
      title: "Project 2",
      deployedUrl: "https://paytonpierce.dev",
      repo: "https://github.com/paytonjewell",
      // image: mock2,
    },
    {
      title: "Project 3",
      deployedUrl: "https://paytonpierce.dev",
      repo: "https://github.com/paytonjewell",
      // image: mock3,
    },
    {
      title: "Project 4",
      deployedUrl: "https://paytonpierce.dev",
      repo: "https://github.com/paytonjewell",
      // image: mock4,
    },
    {
      title: "Project 5",
      deployedUrl: "https://paytonpierce.dev",
      repo: "https://github.com/paytonjewell",
      // image: mock5,
    },
  ],
}

export const ROUTE_PATH = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  ABOUT: "/about-me",
}

export const APP_PAGE = {
  HOME: "Home",
  PORTFOLIO: "Portfolio",
  ABOUT: "About",
}

export const THEME_TYPE = {
  DARK: "dark",
  LIGHT: "light",
}

export const LOCAL_STORAGE = {
  THEME: "portfolioTheme",
}

export const NAV_BAR = [
  {
    name: APP_PAGE.HOME,
    route: ROUTE_PATH.HOME,
  },
  {
    name: APP_PAGE.ABOUT,
    route: ROUTE_PATH.ABOUT,
  },
  {
    logo: require("../assets/img/logo.png"),
    route: ROUTE_PATH.HOME,
  },
  {
    name: APP_PAGE.PORTFOLIO,
    route: ROUTE_PATH.PORTFOLIO,
  },
]
