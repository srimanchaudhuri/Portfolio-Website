import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    tripguide,
    carrent,
    jobit,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Unreal",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Unity",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Android Studio",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "B.Tech (E.E.) Student",
      company_name: "Indian Institute of Engineering Science and Technology",
      icon: starbucks,
      iconBg: "#FAFAFA",
      date: "December 2020 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Intern Trainee",
      company_name: "POSOCO (GRID India)",
      icon: tesla,
      iconBg: "#FAFAFA",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shopper's Island",
      description:
        "Shoper's Island is your ultimate shopping destination, where fashion meets convenience. Discover a curated selection of trendy clothing, accessories, and lifestyle products, all in one place. With a user-friendly interface and secure transactions, we provide a seamless shopping experience. Stay ahead of the fashion curve and elevate your style with Shoper's Island, your go-to online shopping paradise.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/srimanchaudhuri/shopers-island",
    },
    {
      name: "Crypto-Tracker",
      description:
        "Crypto-Tracker is your all-in-one solution for monitoring and managing your cryptocurrency investments. Stay informed about real-time market prices, track your portfolio performance, and receive timely alerts for price changes and market trends. With user-friendly interfaces and comprehensive data analytics, Crypto-Tracker empowers you to make informed decisions and maximize your investment potential. Take control of your crypto journey with Crypto-Tracker and stay ahead in the dynamic world of cryptocurrencies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "apis",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/srimanchaudhuri/crypto-tracker",
    },
    {
      name: "Skipping Cube",
      description:
        "Car Dodger is an exhilarating game developed using Unity, where players must navigate a fast-paced, obstacle-filled environment with their car. Test your reflexes and agility as you dodge incoming obstacles, including other vehicles, barriers, and challenging terrain. With stunning graphics and immersive gameplay, Car Dodger offers a thrilling gaming experience for players of all ages. Can you avoid the obstacles and reach the highest score? Get behind the wheel and start your adventure in Car Dodger today!",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/srimanchaudhuri/Skipping-Cube",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };