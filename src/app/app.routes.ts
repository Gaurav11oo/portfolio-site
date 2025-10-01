import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";
import { SkillsComponent } from "./components/skills/skills.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Home",
      description:
        "Gaurav Nishad - Full-Stack Developer specializing in Angular, .NET, and modern web technologies. Explore my portfolio, experience, and projects.",
      keywords: "Gaurav Nishad, Full-Stack Developer, Angular Developer, .NET Developer, Portfolio, Web Development",
    },
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "About Me",
      description:
        "Learn about Gaurav Nishad, a passionate Full-Stack Developer with expertise in Angular, .NET, and modern web technologies.",
      keywords:
        "About Gaurav Nishad, Full-Stack Developer Background, Angular Developer Profile, .NET Developer Experience",
    },
  },
  {
    path: "skills",
    component: SkillsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Skills",
      description: "My Skills",
      keywords:
        "Gaurav Nishad Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills",
    },
  },
  {
    path: "experience",
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Education",
      description:
        "Explore Gaurav Nishad's professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements.",
      keywords:
        "Gaurav Nishad Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills",
    },
  },
  {
    path: "projects",
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Projects",
      description:
        "Explore Gaurav Nishad's portfolio of innovative web applications and software projects. View detailed case studies of Angular, .NET, and full-stack development work.",
      keywords:
        "Gaurav Nishad Projects, Full-Stack Developer Portfolio, Angular Projects, .NET Applications, Web Development Portfolio",
    },
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Contact",
      description:
        "Get in touch with Gaurav Nishad for collaboration opportunities, project inquiries, or professional discussions.",
      keywords:
        "Contact Gaurav Nishad, Hire Full-Stack Developer, Angular Developer Contact, .NET Developer Hire, Web Development Services",
    },
  },
  {
    path: "resume",
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Resume",
      description:
        "Download or view Gaurav Nishad's professional resume. Comprehensive overview of skills, experience, and achievements as a Full-Stack Developer.",
      keywords:
        "Gaurav Nishad Resume, Full-Stack Developer CV, Angular Developer Resume, .NET Developer CV, Web Developer Resume Download",
    },
  },
  // Legacy hash-based URL redirects
  {
    path: "about-me",
    redirectTo: "/about",
    pathMatch: "full",
  },
  {
    path: "skills",
    redirectTo: "/experience",
    pathMatch: "full",
  },
  {
    path: "testimonials",
    redirectTo: "/experience",
    pathMatch: "full",
  },
  { path: "**", redirectTo: "" }, // Wildcard route for 404 pages
];
