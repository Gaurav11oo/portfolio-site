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
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/angularjs/angularjs-original.svg",
      isInvertLogo: false,
    }, {
      name: "React Flow",
      logo: "https://reactflow.dev/img/logo.svg",
      isInvertLogo: false,
    },
    {
      name: "Radix UI",
      logo: "https://img.logo.dev/radix-ui.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark",
      isInvertLogo: false,
    },
    {
      name: "Framer Motion",
      logo: "https://cdn.simpleicons.org/framer",
      isInvertLogo: false,
    },
    {
      name: "Redux Toolkit",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/redux/redux-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Material UI",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/materialui/materialui-original.svg",
      isInvertLogo: false,
    },
    {
      name: "shadcn/ui",
      logo: "https://ui.shadcn.com/favicon.ico",
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
      isInvertLogo: true,
    },
    {
      name: "OpenAI",
      logo: "https://img.logo.dev/openai.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark",
      isInvertLogo: false,
    },
    {
      name: "Anthropic",
      logo: "https://cdn.simpleicons.org/anthropic",
      isInvertLogo: true,
    },
    {
      name: "Google AI",
      logo: "https://cdn.simpleicons.org/google",
      isInvertLogo: false,
    },
    {
      name: "Vercel AI SDK",
      logo: "https://sdk.vercel.ai/favicon.ico",
      isInvertLogo: false,
    },
    {
      name: "tRPC",
      logo: "https://trpc.io/img/logo.svg",
      isInvertLogo: false,
    },
    {
      name: "Better Auth",
      logo: "https://img.logo.dev/better-auth.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark",
      isInvertLogo: false,
    },
    {
      name: "Inngest",
      logo: "https://www.inngest.com/favicon.ico",
      isInvertLogo: false,
    },
    {
      name: "Polar",
      logo: "https://polar.sh/favicon.ico",
      isInvertLogo: false,
    },
    {
      name: "Stripe",
      logo: "https://cdn.simpleicons.org/stripe",
      isInvertLogo: false,
    },
    {
      name: "Sentry",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/sentry/sentry-original.svg",
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
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/github/github-original.svg",
      isInvertLogo: true,
    },
  ];
}
