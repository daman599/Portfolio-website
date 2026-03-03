export interface ProjectType {
   id: string,
   project_name: string,
   project_description: string,
   project_type: string
   project_pic: string,
   live_link: string,
   code_link: string,
   frontend_techStack: string[],
   backend_techStack?: string[],
   things_learnt?: string[],
   month: string,
   year: string,
}

export const projectsData: ProjectType[] = [
   {
      id: '1',
      project_name: "Shadow",
      project_description: "A collection of box, drop and text shadows which are ready to use as Tailwind and Vanilla Css.",
      project_type: "Frontend",
      project_pic: "/Shadow.png",
      live_link: "https://shadow-mee.vercel.app",
      code_link: "https://github.com/daman599/shadow",
      frontend_techStack: ["Next.js", "TailwindCss", "Motion"],
      month: "February",
      year: "2026"
   },
   {
      id: '2',
      project_name: "Finnova",
      project_description: "A landing page created with cool animations.",
      project_type: "Landing page",
      project_pic: "/Finnova.png",
      live_link: "https://finnova-money.vercel.app",
      code_link: "https://github.com/daman599/Finnova",
      frontend_techStack: ["Next.js", "TailwindCss", "Motion"],
      things_learnt: ["Animations using Motion", "Got inspiration of this design from Dribble"],
      month: "September",
      year: "2025"
   },
   {
      id: '3',
      project_name: "ResumeMatch AI",
      project_description: "AI-powered resume analyzer that intelligently matches your resume with the most relevant and up-to-date job postings.",
      project_type: "Full-stack web app",
      project_pic: "/ResumeMatch_AI.png",
      live_link: "https://resume-match-ai-three.vercel.app",
      code_link: "https://github.com/daman599/Resume-match-ai",
      frontend_techStack: ["Next.js", "TailwindCss", "Zustand"],
      backend_techStack: ["NextAuth", "MongoDB", "Groq API"],
      things_learnt: ["Writing clean & organized code", "Used caching for fetching same jobs data again & again"],
      month: "July",
      year: "2025"
   }
];
