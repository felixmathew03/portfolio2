
import React from 'react';
import { 
  Project, 
  Experience, 
  Education, 
  TechGroup 
} from './types';

export const TECH_STACK: TechGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" },{ name: "TypeScript" },{ name: "Redux" },
      { name: "React.js" }, { name: "Angular" }, { name: "Tailwind CSS" },
      { name: "Bootstrap" }, { name: "SASS" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" }, { name: "Express.js" }, { name: "Django" },
      { name: "Flask" }, { name: "Django REST Framework" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB" }, { name: "MySQL" }, { name: "SQLite" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "JWT Auth" }, { name: "Socket.IO" }, { name: "AWS" },
      { name: "Render" }, { name: "Netlify" }, { name: "Vercel" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Ecosystem",
    description: "A full-featured MERN stack marketplace focused on security and smooth UX.",
    tech: ["MongoDB", "Express", "React", "Node", "JWT"],
    features: ["Product browsing", "Secure cart & checkout", "Order management", "Admin dashboard"],
    image: "https://picsum.photos/seed/shop/800/600",
    githubUrl: "https://github.com/felixmathew03",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "High-performance instant messaging platform built for low latency.",
    tech: ["MERN", "Socket.IO", "Redux"],
    features: ["Real-time messaging", "Online presence status", "Responsive chat UI", "Secure auth"],
    image: "https://picsum.photos/seed/chat/800/600",
    githubUrl: "https://github.com/felixmathew03",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Social Sphere (Instagram Clone)",
    description: "Modern social media platform emphasizing engagement and polished UI.",
    tech: ["React", "Node.js", "Cloudinary", "Express"],
    features: ["Image uploads", "Real-time likes & comments", "Profile customization", "Feed algorithm"],
    image: "https://picsum.photos/seed/social/800/600",
    githubUrl: "https://github.com/felixmathew03",
    liveUrl: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Full Stack Trainer",
    company: "Synnefo Solutions",
    period: "Mar 2025 – Present",
    location: "Kochi, Kerala",
    description: [
      "Training students in MERN & Python full stack development.",
      "Guiding real-world projects and architectural decisions.",
      "Explaining complex backend concepts, authentication, and deployment workflows."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 1,
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "St. Georges's College, Kottayam",
    period: "2021 – 2024"
  },
  {
    id: 2,
    degree: "MERN Stack Internship",
    institution: "Synnefo Solutions",
    period: "Jun 2024 – Dec 2024"
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    institution: "St. George HSS, Aruvithura",
    period: "2019 – 2021"
  }
];
