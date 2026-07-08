import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  projects = [
    {
      title: "Nodebase",
      description: [
        "Built a visual workflow automation platform inspired by modern no-code tools, enabling users to create, execute, and monitor workflows through an interactive drag-and-drop editor.",
        "Implemented secure authentication with Better Auth, workflow execution using Inngest, real-time execution tracking, HTTP requests, AI integrations, trigger nodes, and detailed execution history.",
        "Developed a responsive dashboard with Next.js, React Flow, tRPC, Prisma, PostgreSQL, Tailwind CSS, and shadcn/ui, featuring workflow management, node configuration, and execution monitoring."
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "Inngest",
        "Better Auth",
        "React Flow",
        "Tailwind CSS",
        "shadcn/ui"
      ],
      image: "/assets/nodebase.png",
      url: "https://nodebase-26.vercel.app/",
      aosImage: "fade-left",
    },
    {
      title: "Flipkart Clone",
      description: [
        "Implemented user authentication, product listing, cart functionality, and order management with secure APIs and role-based access.",
        "Integrated payment gateway (Razorpay/Stripe) and real-time product filtering, search, and sorting features for a smooth user experience.",
        "Designed a responsive UI using React, Redux Toolkit, Material UI and Tailwind CSS, ensuring seamless interaction across devices.",
      ],
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Payment Gateway", "Material UI", "Tailwind CSS"],
      image: "/assets/flipkart-clone.png",
      url: "https://flipkartmernsite.vercel.app/",
      aosImage: "fade-right",
    },
    {
      title: "Job Portal",
      description: [
        "Job Portal built for using to connect job seekers and employers with a seamless hiring process.",
        "Designed a scalable architecture with secure authentication, RESTful APIs, and role-based access control.",
        "Implemented real-time job search, advanced filtering, resume uploads, application tracking, and email notifications.",
        "Developed an interactive dashboard for job seekers and recruiters to manage applications, job postings, and user profiles efficiently.",
      ],
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/assets/Job-portal.png",
      url: "https://jobportal2025.netlify.app/", // 🔗 Add your actual live link here
      aosImage: "fade-left",
    },
    {
      title: "Blood Bank Management System",
      description: [
        "Developed a Blood Bank Management System using MERN Stack to streamline blood donation, inventory management, and request processing.",
        "Designed a secure and scalable system with JWT authentication, RESTful APIs, and role-based access control for donors, recipients, and administrators.",
        "Implemented real-time blood availability tracking, donor registration, request handling, and notification system for seamless operations.",
        "Built an interactive dashboard to monitor blood stock levels, manage donation history, and facilitate efficient communication between users.",
      ],
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Boot Strap", "HTML", "CSS"],
      image: "/assets/bank1.png",
      url: "https://mernblood01.netlify.app/", // 🔗 Add your actual live link here
      aosImage: "fade-right",
    },
  ];
}
