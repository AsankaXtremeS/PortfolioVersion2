import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiJavascript, SiHtml5, SiCss, SiFigma,
  SiNodedotjs, SiFastapi, SiPython, SiExpress,
  SiPostgresql, SiMongodb, SiMysql, SiPrisma,
  SiGit, SiGithubactions, SiLinux, SiVercel,
  SiPandas, SiNumpy, SiScikitlearn,
} from 'react-icons/si'

export const TYPE_STRINGS = [
  'Next.js & React apps',
  'Clean Architecture',
  'AI / ML workflows',
  'Scalable APIs',
  'Full Stack systems',
]

export const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institute: 'University of Moratuwa',
    period: '2024 - Present',
    focus: 'Software Engineering, Web Engineering, Data Structures & Algorithms, DBMS, IOT, Microcontrollers, Arduino, Fundamentals of IT & Programming',
  },
  {
    degree: 'Advanced Level - Physical Science Stream',
    institute: 'Mahinda College, Galle',
    period: 'Completed',
    focus: 'Combined Mathematics A, Physics A, Chemistry B - District Rank 120, with strong emphasis on problem-solving and analytical thinking.',
  },
  {
    degree: 'Ordinary Level',
    institute: 'All Saints College, Galle',
    period: 'Completed',
    focus: 'Passed 9 subjects with Distinction, including English, Mathematics, Science, and Information Technology.',
  },
]

export const categories = [
  {
    id: '01',
    title: 'Front-End',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    id: '02',
    title: 'Back-End',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Python', icon: SiPython },
      { name: 'Express', icon: SiExpress },
    ],
  },
  {
    id: '03',
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    id: '04',
    title: 'DevOps',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'CI/CD', icon: SiGithubactions },
      { name: 'Linux', icon: SiLinux },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    id: '05',
    title: 'AI / ML',
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit', icon: SiScikitlearn },
    ],
  },
]
