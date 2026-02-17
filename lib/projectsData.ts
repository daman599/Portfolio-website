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
      project_name: "Bentoish-UI",
      project_description: "A bento-grid styled reusable components library. It is still in developement phase. For now it has only 2 components which you can use in your projects.",
      project_type: "Frontend",
      project_pic: "/Bentoish-ui.png",
      live_link: "https://ui-bentoish.vercel.app",
      code_link: "https://github.com/daman599/Bentoish-UI",
      frontend_techStack: ["Next.js", "TailwindCss", "Motion"],
      things_learnt: ["Structuring components better", "Writing clean and reusable code"],
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
