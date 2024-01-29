/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manali Thakur Portfolio",
  description:
    "Passionate recent data science graduate skilled in end-to-end project development, leveraging data to create sustainable and impactful solutions.",
  og: {
    title: "Manali Thakur Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Manali Thakur",
  logo_name: "ManaliThakur",
  nickname: "",
  subTitle:
    "Passionate recent data science graduate skilled in end-to-end project development, leveraging data to create sustainable and impactful solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1RJZ4pviGkIrGMVX7FKxu0Cnyqat985M1/view?usp=sharing",
  portfolio_repository: "https://github.com/manali146",
  githubProfile: "https://github.com/manali146",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/manali146",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manalithakur/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:manalithakur165@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/manalithakur1995/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable machine learning models for various business use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building data pipelines for extracting, transforming, and loading large datasets",
        "⚡ Experience with database management systems and data warehousing",
        "⚡ Implementing efficient data processing and storage solutions",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#61DAFB",
          },
        },

      ],
    },
    {
      title: "Machine Learning Deployment",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying machine learning models in production environments",
        "⚡ Experience with containerization and cloud-based deployment",
        "⚡ Knowledge of model monitoring, scaling, and performance optimization",
      ],
      softwareSkills: [
        
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing scalable and efficient software solutions",
        "⚡ Proficient in various programming languages and frameworks",
        "⚡ Experience with software development lifecycle and agile methodologies",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Agile Methodologies",
          fontAwesomeClassname: "simple-icons:agile",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },

    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },

    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },

    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },

    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Mumbai University",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "Mumbai-University.png",
      alt_name: "MU",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI, HMI etc.",
        "⚡ During my time at university, I actively participated in coding competitions and hackathons.",
        "⚡ I completed a successful project in collaboration with industry professionals, which involved developing a web application using modern web technologies.",
      ],
      website_link: "https://mu.ac.in/",
    },
    {
      title: "Otto von Guericke University Magdeburg",
      subtitle: "M.S. in Digital Engineering",
      logo_path: "ovgu_uni.png",
      alt_name: "OVGU",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ As part of my master's program, I specialized in Data Science, focusing on advanced topics such as machine learning, data analytics, and deep learning.",
        "⚡ I gained in-depth knowledge of algorithms, data structures, and optimization techniques during my coursework.",
        "⚡ I also took part in workshops and seminars to enhance my skills in areas like data mining, pattern recognition, and natural language processing.",
      ],
      website_link: "https://www.ovgu.de/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ML Pipeline",
      subtitle: "- Azure ML Studio",
      logo_path: "azure.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8GYZZWWXKYX4",
      alt_name: "Stanford University",
      color_code: "skyblue",
    },
    {
      title: "Google Analytics",
      subtitle: "- Freedom Learning Group",
      logo_path: "GA.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FXH7FZBYXQQG",
      alt_name: "google data studio",
      color_code: "#0C9D5899",
    },
    
    {
      title: "Fine Tune BERT",
      subtitle: "- Tensorflow",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/PRVR6DRNPJ63",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "NLP ",
      subtitle: "- DeepLearning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/F6ALH3ALGP8A",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Amazon Sagemaker",
      subtitle: "- AWSEducate",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/15JLN4KQWUeEPJYJV2gvq-MmZkc12L4q7/view?usp=sharing",
      alt_name: "AWS",
      color_code: "lightgrey",
    },
    {
      title: "ML Essentials for Business",
      subtitle: "- AWSEducate",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1QFyY4YLqSLGpid-T2li0ARzJMgn8Ad1l/view?usp=sharing",
      alt_name: "AWS",
      color_code: "lightgrey",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Throughout my career, I have had the privilege to work with well-established companies as a Software Engineer and Data Scientist. These experiences have allowed me to contribute my skills and expertise in developing robust software solutions and leveraging data science techniques to drive meaningful insights.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Data Scientist",
          company: "Heraeus",
          company_url: "https://www.heraeus.com/en/group/home/home.html",
          logo_path: "heraeus.png",
          duration: "Apr 2022 - Sept 2022",
          location: "Hanau, Germany",
          description:
            "Worked on developing optimized data pipelines using CRISP-DM for data cleaning, feature engineering, and modeling in the Logistics domain. Utilized machine learning models such as XGBoost, LSTM, and Decision Trees to forecast shipping costs based on package content. Collaborated with clients to determine project feasibility and requirements.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Infogain",
          company_url: "https://www.infogain.com/",
          logo_path: "infogain.png",
          duration: "Dec 2017 - Sept 2019",
          location: "Mumbai, Maharashtra",
          description:
            "Implemented automated scripts, resulting in a significant increase in code efficiency. Identified and resolved project bottlenecks, leading to a substantial increase in client satisfaction ratings. Collaborated closely with cross-functional teams to ensure the delivery of high-quality software solutions.",
          color: "#9b1578",
        },

      ],
    },
    {
      title: "Internships",
      experiences: [

        {
          title: "Data Science Intern",
          company: "Heraeus",
          company_url:
            "https://www.heraeus.com/en/group/home/home.html",
          logo_path: "heraeus.png",
          duration: "Oct 2021 - Apr 2022",
          location: "Hanau, Germany",
          description:
            "I utilized Google Analytics and Studio to gather valuable data insights, resulting in enhanced business strategies and operational efficiency. Additionally, I performed Monte Carlo simulations to predict monthly margins in the finance industry. Moreover, I developed comprehensive metrics that effectively communicated company goals and strategies to stakeholders.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "NASA Space Apps Challenge Local Lead of Magdeburg",
          company: "NASA",
          company_url: "https://www.nasa.gov/",
          logo_path: "nasa.png",
          duration: "Sep 2022 - Oct 2022",
          location: "Remote",
          description:
            "As the NASA Space Apps Challenge Local Lead of Magdeburg, I organized and facilitated an innovative and engaging event to encourage collaboration and problem-solving in the field of space exploration and technology.",
          color: "#4285F4",
        },
        {
          title: "Volunteer",
          company: "Data Natives Conference",
          company_url: "https://datanatives.io/",
          logo_path: "dn.png",
          duration: "Aug 2022 - Sept 2022",
          location: "Berlin, Germany",
          description:
            "As a volunteer at Data Natives, I contributed my skills and passion for data science to support the organization's mission of fostering knowledge sharing and innovation in the data industry.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "PyCon DE & PyData Conference",
          company_url: "https://2022.pycon.de/",
          logo_path: "PyConDE_PyDataBer_circle_trans_500.png",
          duration: "Apr 2023",
          location: "Berlin, Germany",
          description:
            "As a volunteer at PyCon DE & PyData Conference, I actively contributed to the success of the event by assisting with various tasks and supporting the Python community in Berlin.",
          color: "#000000",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.jpg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.jpg",
};



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manali_thakur.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "Stendaler Strasse 2a, Magdeburg, Germany - 39106",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/5tUwBzhvDATLqKNPA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,

  contactPageData,
};
