import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

import heroImage from '../images/header-background.webp';
//import heroImage from '../images/2.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chinthaka Bandaranayake`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a Jaffna-based Computer Science undergraduate with a passion for <strong>full-stack development</strong> and emerging technologies. These days, I'm diving into <strong>Solidity</strong> and <strong>blockchain</strong> development, expanding my skills in decentralized applications and smart contracts.


      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      In my free time, you can find me exploring new programming challenges or enjoying the coastal beauty of northern Sri Lanka.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a Jaffna-based Computer Science undergraduate with a knack for solving problems and a strong focus on full-stack development. I enjoy working with technologies like React, Node.js, Firebase, and Solidity, and I'm currently exploring the world of blockchain and decentralized applications.

I thrive on continuous learning and love tackling programming challenges. Whether it's building innovative projects or experimenting with new tools, I’m always eager to expand my skill set.

Beyond coding, I enjoy discovering creative ways to combine technology with real-world applications and taking time to appreciate the serene beauty of northern Sri Lanka.`,
  aboutItems: [
    {label: 'Location', text: 'Uduhawara, Sri Lanka', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Sri Lankan', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Music, Travel, Motor cars', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Jaffna', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Sinhala',
        level: 10,
      },
      {
        name: 'Tamil',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Solidity',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'University Voting System',
    description: 'The University Voting System is a digital platform for managing university elections, built with React and Firebase. It features an admin dashboard for election management, secure voting with real-time updates, and dynamic visualizations for results. The system ensures transparency, user-friendliness, and efficient data handling, providing a modern solution for university electoral processes',
    url: 'https://github.com/chinthaka2000/university-voting-system-Group_15-',
    image: porfolioImage1,
  },
  {
    title: 'Project 2',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage2,
  },
  {
    title: 'Project 3',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage3,
  },
  {
    title: 'Project 4',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage4,
  },
  {
    title: 'Project 5',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage5,
  },
  {
    title: 'Project 6',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage6,
  },
  {
    title: 'Project 7',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage7,
  },
  {
    title: 'Project 8',
    description: 'Coming Soon',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/chinthaka2000',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2021',
    location: 'University of Jaffna',
    title: 'Bachelor of Computer Science',
    content: <p>Bachelor of Computer Science
    University of Jaffna
    • Expected Graduation: December 2025
    Gained a strong foundation in algorithms, data structures, and software development. Explored machine learning, blockchain technology, and backend development with Solidity. Actively participated in coding competitions and collaborative projects.</p>,
  },
  {
    date: '',
    location: '',
    title: 'Certifications and Workshops:',
    content: <p>Advanced Machine Learning - SLIIT (2024) <br/>
    Foundations of Project Management - University of Moratuwa (2024) <br/>
    Deep Learning Fundamentals - IEEE Computer Society (2024)
    
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Present',
    location: 'University of Jaffna',
    title: 'University Voting System (React, Firebase)',
    content: (
      <p>
        Designed and implemented a voting system for university elections, ensuring secure vote storage and real-time analytics.
        Utilized React.js for the front end, Firebase Firestore for the database, and Chart.js for results visualization.
        Introduced features like an admin dashboard, active-election validation, and a user-friendly interface.
      </p>
    ),
  },
  {
    date: '',
    location: '',
    title: 'Technologies I\'ve Worked With',
    content: (
      <p>
        <b>Programming Languages:</b> C, C++, Java, Solidity, Go, Python, JavaScript, HTML, CSS, SQL, MATLAB, R.<br></br>
        <b>Web Development:</b> React.js, Node.js, Flask, PHP, Firebase.<br></br>
        <b>Databases:</b> MySQL, Firestore, MongoDB.<br></br>
        <b>Cloud & DevOps:</b> Docker, Kubernetes, Google Cloud Platform (GCP).<br></br>
        <b>IoT & Embedded Systems:</b> Arduino, Tinkercad, Raspberry Pi.<br></br>
        <b>AI/ML:</b> TensorFlow, Keras, scikit-learn, Pandas, NumPy.<br></br>
        <b>Project Management Tools:</b> JIRA, Trello, Agile methodologies.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Sarah Johnson, Freelance Project Collaborator',
      text: 'Chinthaka\'s attention to detail and ability to deliver under tight deadlines are remarkable. He brought creativity and efficiency to our e-commerce project, ensuring a smooth user experience and effective API integration. He is a highly reliable and skilled developer.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Sophia Green, ML Research Assistant',
      text: 'Chinthaka\'s commitment to excellence and his ability to stay ahead of industry trends make him an exceptional colleague. His work on our machine learning models was both innovative and impactful, demonstrating his deep understanding of AI technologies and his drive for perfection.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Emily Carter, IoT Research Collaborator',
      text: 'Chinthaka\'s enthusiasm for learning and applying new technologies is contagious. During our IoT Bee Activity Monitor project, he not only implemented the simulation but also guided the team through complex technical challenges. His dedication and leadership were key to the project\’s success.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you\'d like to connect or discuss any opportunities! I\'m always happy to chat and collaborate.',
  items: [
    {
      type: ContactType.Email,
      text: 'Smartchinthaka512@gmail.com',
      href: 'Smartchinthaka512@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Chinthaka Bandaranayake',
      href: 'https://www.linkedin.com/in/chinthaka-bandaranayake/',
    },
    {
      type: ContactType.Instagram,
      text: 'Chinthaka_Bandaranayake',
      href: 'https://www.instagram.com/chinthaka_bandaranayake/',
    },
    {
      type: ContactType.Github,
      text: 'Chinthaka2000',
      href: 'https://github.com/chinthaka2000',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/chinthaka2000'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/chinthaka-bandaranayake/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/chinthaka_bandaranayake/'},
];
