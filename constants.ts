
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  profile: {
    name: "Narasimha Sai",
    title: "Software Engineer II | Backend & Distributed Systems",
    location: "Andhra Pradesh, India",
    phone: "7660093555",
    email: "chilamakuri604@gmail.com",
    summary: "Backend-focused Software Engineer with professional experience architecting scalable microservices. Proficient in optimizing high-throughput systems (10k+ ops/sec) using Spring Boot, Kafka, and Redis. Deeply invested in System Design, clean architecture, and cloud-native solutions.",
    resumeUrl: "https://drive.google.com/file/d/1IqwJH_-WKNbAWUPSNG_8k-fEteBMvYm5/view?usp=sharing", // Ensure you upload a file named resume.pdf to your public folder
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/chilmakurinarasimhasai/" }, 
      { platform: "GitHub", url: "https://github.com/narasimhaChilmakuri" },
      { platform: "Codolio", url: "https://codolio.com/profile/discretebody" }
    ]
  },
  experience: [
    {
      company: "Raymedis Medical Technologies",
      role: "Software Development Engineer",
      location: "Hyderabad",
      period: "May 2024 – Present",
      points: [
        "Architected and deployed microservices architecture using Spring Boot, Redis, Docker, and Git, improving system throughput by 50% and reducing inter-service latency by 30%.",
        "Optimized mission-critical backend services, achieving a 25% reduction in data processing latency through advanced SQL tuning and concurrent execution strategies.",
        "Leading the initiative to decouple monolithic services into domain-driven microservices, enhancing maintainability and scalability."
      ]
    },
    {
      company: "Raymedis Medical Technologies",
      role: "Software Engineer Intern",
      location: "Hyderabad",
      period: "Nov 2023 – May 2024",
      points: [
        "Refactored legacy modules in a desktop application into high-throughput data pipelines, increasing processing throughput by 70%.",
        "Standardized UI/UX development by implementing SOLID principles in component libraries, cutting feature delivery cycles by 40%.",
        "Assisted in the migration of on-premise databases to cloud-managed instances, ensuring data integrity and zero downtime."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Software Engineering Intern",
      location: "Chennai",
      period: "Mar 2022 – May 2022",
      points: [
        "Engineered core modules for a high-traffic web application using Java Servlets and JSP, delivering 3 major features ahead of schedule.",
        "Implemented robust CI/CD pipelines and automated testing strategies, streamlining the deployment process and reducing regression bugs."
      ]
    }
  ],
  projects: [
    {
      title: "Distributed Connections System",
      status: "Production Ready",
      description: [
        "Designed an event-driven microservices ecosystem handling 10,000+ real-time events/sec using Kafka and Spring Boot.",
        "Solved complex graph traversal problems for user connections using Neo4j, optimizing 2nd and 3rd degree connection queries.",
        "Implemented multi-layer caching with Redis to reduce database load by 60% during peak traffic bursts."
      ],
      techStack: ["Spring Boot", "Kafka", "Neo4j", "Redis", "Docker", "Microservices"]
    },
    {
      title: "High-Performance Invoice Engine",
      status: "Completed",
      description: [
        "Developed a low-latency billing engine capable of processing complex discount rules via a custom Object-Oriented rule engine.",
        "Engineered real-time status streaming using Server-Sent Events (SSE), ensuring sub-second updates for client dashboards.",
        "Ensured system reliability through comprehensive unit and integration testing, achieving 90%+ code coverage."
      ],
      techStack: ["Java", "Spring Boot", "SSE", "Design Patterns", "PostgreSQL"]
    },
    {
      title: "Automated Layout Optimization Tool",
      status: "Completed",
      description: [
        "Built a desktop-based image processing tool integrating OpenCV for automated layout analysis and optimization.",
        "Leveraged JavaFX to create a responsive, hardware-accelerated UI capable of rendering high-resolution schematics smoothly.",
        "Reduced manual layout planning time by approximately 70% for end-users."
      ],
      techStack: ["JavaFX", "OpenCV", "Desktop UI", "Algorithms"]
    },
    {
      title: "Scalable Booking Platform",
      status: "In Development",
      description: [
        "Architecting a modular backend supporting 10,000+ daily active users with stateless JWT authentication.",
        "Implementing database sharding strategies and read-replicas to handle read-heavy search workloads.",
        "Securing payment processing workflows with idempotent API design to prevent duplicate transactions."
      ],
      techStack: ["Spring Boot", "MySQL", "REST APIs", "System Design"]
    }
  ],
  education: [
    {
      institution: "Veltech University",
      location: "Chennai",
      degree: "B.Tech in Computer Science",
      period: "2019 - 2023",
      details: "CGPA: 8.8 | DSA & Algorithms Focus"
    }
  ],
  achievements: [
    "Ranked 3rd in GeeksforGeeks University Challenge (Top 0.5% of 750+ participants).",
    "Consistently active problem solver with 500+ DSA problems solved across LeetCode and CodeChef.",
    "Codolio Profile: Recognized for consistent coding streaks and algorithm proficiency."
  ],
  skills: [
    { 
      name: "System Design & Backend", 
      skills: ["Java 17+", "Spring Boot", "Microservices", "Kafka", "Redis", "System Design", "AWS (Basic)", "Docker", "Kubernetes"] 
    },
    { 
      name: "Data & Storage", 
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Elasticsearch"] 
    },
    { 
      name: "Tools & CI/CD", 
      skills: ["Git", "Jenkins", "Maven/Gradle", "Postman", "JIRA", "IntelliJ IDEA", "Linux"] 
    },
    { 
      name: "Frontend & Others", 
      skills: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "JavaFX", "OpenCV", "WebSockets"] 
    }
  ]
};
