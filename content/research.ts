import type { ResearchEntry } from "@/lib/types";

export const research: ResearchEntry[] = [
  {
    title: "Real-Time Crime Detection System Using CCTV Surveillance",
    venue: "International Journal of Advanced Multidisciplinary Research and Studies (IJAMRSD)",
    journal: "International Journal of Advanced Multidisciplinary Research and Studies (IJAMRSD)",
    volume: "Volume 5",
    issue: "Special Issue 3",
    publicationDate: "May 2026",
    year: 2026,
    author: "Vicky V. Raut",
    abstract:
      "Manual CCTV surveillance is labor-intensive and prone to human oversight, leading to critical delays during emergencies. This paper presents an automated deep learning framework for real-time criminal activity detection from surveillance footage. By processing continuous video streams to identify suspicious behaviors and abnormal events, the system triggers automated real-time alerts to assist security personnel.",
    methodology:
      "Engineered an end-to-end computer vision pipeline combining spatial feature extraction with temporal sequence analysis on CCTV streams. The framework integrates YOLOv8 for rapid object and actor detection with deep sequence modeling to evaluate temporal actions and suspicious activities in real time.",
    results:
      "Demonstrated accurate real-time event classification and low-latency alert generation across diverse camera angles and ambient lighting conditions, significantly improving upon traditional manual surveillance workflows.",
    paperUrl:
      "https://ijamrsd.com/wp-content/uploads/2026/05/JAMRSD-05-S03-2026_17.pdf",
    codeUrl:
      "https://github.com/vickyraut/Real-Time-Criminal-Activity-Detection",
  },
];
