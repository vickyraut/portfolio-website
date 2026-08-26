import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Indian Institute of Information Technology, Surat",
    role: "Part-Time Software Developer",
    startDate: "Mar 2024",
    endDate: "Jan 2025",
    achievements: [
      "Contributed to a cloud-based smart traffic management system for intelligent signal control using AI and IoT technologies.",
      "Developed and optimized real-time computer vision pipelines using YOLO for vehicle detection, tracking, and traffic analysis.",
      "Integrated backend services with Django and collaborated on deployment workflows across AWS, Raspberry Pi 5, and Jetson Nano.",
    ],
    techStack: ["Python", "YOLO", "Django", "AWS", "Raspberry Pi 5", "Jetson Nano", "Computer Vision"],
  },
  {
    company: "Apna College",
    role: "Teaching Assistant",
    startDate: "May 2024",
    endDate: "Aug 2024",
    achievements: [
      "Mentored 150+ students in Data Structures and Algorithms through one-on-one guidance.",
      "Resolved coding doubts and strengthened problem-solving skills across a large student cohort.",
      "Reinforced core DSA fundamentals through structured explanations and practical problem sets.",
    ],
    techStack: ["DSA", "Java", "Python", "Mentorship"],
  },
  {
    company: "Mountreach Solution Pvt. Ltd.",
    role: "Android Developer Intern",
    startDate: "Oct 2022",
    endDate: "Feb 2023",
    achievements: [
      "Developed Android applications using Java, implementing MVC and MVVM architecture with a MySQL backend.",
      "Built application features, fixed bugs, and improved compatibility across multiple Android versions.",
      "Applied SOLID principles and debugging best practices to strengthen code quality and maintainability.",
    ],
    techStack: ["Java", "MVVM", "MVC", "MySQL", "Android SDK"],
  },
];
