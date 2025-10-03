import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  standalone: true,
  templateUrl: "./skills.component.html",
  styles: ["invert  { filter: invert(1) }"],
})
export class SkillsComponent {
  frontends = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg",
      isInvertLogo: false,
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg",
      isInvertLogo: false,
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Next JS",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/nextjs/nextjs-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg",
      isInvertLogo: false,
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg",
      isInvertLogo: false,
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg",
      isInvertLogo: false,
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/c/c-original.svg",
      isInvertLogo: false,
    },
    {
      name: "C++",
      logo: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      isInvertLogo: false,
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg",
      isInvertLogo: true,
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg",
      isInvertLogo: false,
    },
    {
      name: "My SQL",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/mysql/mysql-original.svg",
      isInvertLogo: false,
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Prisma",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/prisma/prisma-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg",
      isInvertLogo: false,
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      isInvertLogo: false,
    },
    {
      name: "Vercel",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/vercel/vercel-original.svg",
      isInvertLogo: true,
    },
    {
      name: "Netlify",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg",
      isInvertLogo: false,
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/github/github-original-wordmark.svg",
      isInvertLogo: false,
    },
  ];
}
//   backends = [
//     {
//       name: "Python",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "C",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/c/c-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "C++",
//       logo: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "Node.js",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "Express.js",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg",
//       isInvertLogo: true,
//     },
//     // {
//     //   name: "Flask",
//     //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/flask/flask-original.svg",
//     //   isInvertLogo: true,
//     // },
//   ];

//   databases = [
//     {
//       name: "MongoDB",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "My SQL",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/mysql/mysql-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "PostgreSQL",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "Prisma",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/prisma/prisma-original.svg",
//       isInvertLogo: false,
//     },
//     // {
//     //   name: "MySQL",
//     //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg",
//     //   isInvertLogo: false,
//     // },
//   ];

//   opss = [
//     {
//       name: "Git",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "Docker",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "AWS",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "Vercel",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/vercel/vercel-original-wordmark.svg",
//       isInvertLogo: true,
//     },
//     {
//       name: "Netlify",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg",
//       isInvertLogo: false,
//     },
//     {
//       name: "GitHub",
//       logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/github/github-original-wordmark.svg",
//       isInvertLogo: false,
//     },
//   ];
// }
