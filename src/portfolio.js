/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Warayus Poolsaweang",
  title: "Hi all, I'm Warayus",
  subTitle: emoji(
    "Software Engineer (7+ yrs) focused on Go backends, Vue/Flutter frontends, and GCP. Healthcare domain experience (IPD/OPD). I ship reliable, scalable products. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Amidama",
  linkedin: "https://www.linkedin.com/in/warayus-poolsaweang-ba8b23186",
  gmail: "warayus.po@gmail.com",
  devto: "https://dev.to/warayus",
  // medium: "https://medium.com/@warayus", // enable if you use Medium
  // stackoverflow: "https://stackoverflow.com/users/warayus",
  // Optional handles you mentioned without clear URLs
  // Amidama / Waraoat can be added once URLs are provided
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full‑stack engineer focused on performant backends, clean UIs, and reliable delivery.",
  skills: [
    emoji("⚡ Robust backend services in Golang, NestJS, Rails, Laravel, Node.js"),
    emoji("⚡ Modern frontends with Flutter, Vue.js, Next.js, Tailwind CSS"),
    emoji("⚡ Cloud & DevOps on GCP with Docker, Kubernetes, CI/CD"),
    emoji("⚡ Monitoring & analytics with Prometheus, Grafana, Datadog, Amplitude")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Golang", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Elixir", fontAwesomeClassname: "fas fa-flask"},
    {skillName: "Ruby", fontAwesomeClassname: "fas fa-gem"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Express.js", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt"},
    {skillName: "Solidity", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "NestJS", fontAwesomeClassname: "fas fa-feather"},
    {skillName: "Ruby on Rails", fontAwesomeClassname: "fas fa-train"},
    {skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-seedling"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Google Cloud Platform", fontAwesomeClassname: "fab fa-google"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie"},
    {skillName: "Datadog", fontAwesomeClassname: "fas fa-paw"},
    {skillName: "Amplitude", fontAwesomeClassname: "fas fa-signal"},
    {skillName: "Tailwind CSS", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress-simple"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kasetsart University",
      logo: require("./assets/images/ku.png"),
      subHeader: "Bachelor of Engineering (Electrical Engineering)",
      duration: "2014 – 2018",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Project Management",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Mobile",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Senestia CO., LTD",
      companylogo: require("./assets/images/senestia.png"),
      date: "Aug 2024 – Present",
      desc: "Integrated IPD & OPD Healthcare Platform",
      descBullets: [
        "Maintain and enhance core systems for IPD/OPD healthcare products",
        "Develop new features, refactor legacy modules, ensure seamless performance",
        "Collaborate cross‑functionally to ensure reliability, security, scalability",
        "Tech: Golang, Flutter, NestJS, GCP, PostgreSQL, Redis, MS SQL Server"
      ]
    },
    {
      role: "Software Engineer",
      company: "Prodigy9 Co., Ltd.",
      companylogo: require("./assets/images/prodigy9.jpeg"),
      date: "May 2021 – Aug 2024",
      desc: "Delivered multiple projects end‑to‑end across transit, fintech, and SaaS",
      descBullets: [
        "Sky Train Trip Deduction: architecture to deployment; team lead (Go, Svelte, Redis, PostgreSQL, K8s)",
        "PH Digital Wallet: payments, reporting, gateway integration (Go, Elixir/Phoenix, PostgreSQL, Redis)",
        "Crowdfunding: investor–business intermediary; key features (Laravel, Vue 2, Tailwind)",
        "e‑Wallet: KYC document storage with secure flows (Go)",
        "Sales Assistant: prospect data automation (Next.js, Tailwind)",
        "Docs Management: calc + financial docs (Node.js, Vue 2, MySQL)"
      ]
    },
    {
      role: "Software Engineer",
      company: "Gettgo",
      companylogo: require("./assets/images/gettgo.png"),
      date: "Jun 2019 – May 2021",
      desc: "Insurance Broker platform operations and infrastructure",
      descBullets: [
        "Maintained website with Ruby on Rails and GraphQL",
        "Implemented monitoring with Prometheus and Grafana",
        "Managed infrastructure on Google Cloud Platform"
      ]
    },
    {
      role: "Software Engineer",
      company: "Onespace",
      date: "Apr 2018 – Jun2019",
      companylogo: require("./assets/images/onespace.jpeg"),
      desc: "Blockchain on Cloud",
      descBullets: [
        "Developed and deployed blockchain solutions on cloud infrastructure",
        "Backend with Laravel; smart contracts with Solidity"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/skytrain.png"),
      projectName: "Trip Deduction System (Sky Train)",
      projectDesc:
        "Trip deduction for metro rail. Admins customize rules for promotions. I led end‑to‑end delivery and team execution.",
    },
    {
      image: require("./assets/images/nurse_order.png"),
      projectName: "OPD Nurse Order",
      projectDesc:
        "Streamlines nurse item requisitions (e.g., slips) and reduces ops friction. Drove design and XFN alignment on scope and timelines.",
    },
    {
      image: require("./assets/images/opd_queue_icon.png"),
      projectName: "OPD Queue",
      projectDesc:
        "Patient wait‑time/status visibility and efficient nurse queue management. Line OA notifications included. XFN from requirements to feedback loops.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I'm new to blogging, but I'm excited to share my learning journey and cool discoveries as I grow as a developer. Join me as I explore and write about what I'm learning!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/warayus/api-handling-utilizing-the-facade-pattern-with-axios-in-frontend-development-25n4",
      title: "API Handling Utilizing the Facade Pattern with Axios in Frontend Development",
      description:
        "Learn how to use the Facade pattern to simplify API handling in frontend development with Axios."
    },
    {
      url: "https://dev.to/warayus/the-complete-guide-to-prompt-engineering-from-zero-shot-to-ai-agents-35bke",
      title: "The Complete Guide to Prompt Engineering from Zero Shot to AI Agents",
      description:
        "Learn how to use prompt engineering to build AI agents."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "087-9095406",
  email_address: "warayus.po@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
