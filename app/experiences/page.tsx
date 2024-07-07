"use client";

import "react-vertical-timeline-component/style.min.css";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGit,
  FaDocker,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiGooglecloud,
  SiFlask,
  SiFastapi,
  SiTerraform,
  SiC,
  SiCplusplus,
  SiR,
  SiPostgresql,
  SiMongodb,
  SiLinux,
  SiGooglecloudspanner,
  SiAmazonec2,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiNotion,
  SiAirtable,
  SiSlack,
  SiLinkedin,
  SiGhost,
  SiKubernetes,
  SiRedis,
} from "react-icons/si";

const skills = {
  title: "Skills",
  description:
    "Some of the technologies I&apos;'ve worked with, sorted by APIs, programming languages, frameworks and developer tools.",
  items: [
    // APIs
    {
      icon: <SiOpenai />,
      name: "OpenAI API",
    },
    {
      icon: <SiAnthropic />,
      name: "Anthropic API",
    },
    {
      icon: <SiGooglegemini />,
      name: "Google Gemini API",
    },
    {
      icon: <SiNotion />,
      name: "Notion API",
    },
    {
      icon: <SiAirtable />,
      name: "Airtable API",
    },
    {
      icon: <SiSlack />,
      name: "Slack API",
    },
    {
      icon: <SiLinkedin />,
      name: "LinkedIn API",
    },
    {
      icon: <SiGhost />,
      name: "Ghost API",
    },
    // Languages
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiR />,
      name: "R",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiPostgresql />,
      name: "SQL",
    },
    {
      icon: <SiMongodb />,
      name: "NoSQL",
    },
    // Frameworks
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    // Developer Tools
    {
      icon: <SiKubernetes />,
      name: "Google Kubernetes Engine",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud Platform",
    },
    {
      icon: <SiGooglecloudspanner />,
      name: "Google Spanner",
    },
    {
      icon: <SiAmazonec2 />,
      name: "Amazon EC2",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiLinux />,
      name: "UNIX",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiTerraform />,
      name: "Terraform",
    },
  ],
};

// ... existing code ...
import { motion } from "framer-motion";

// Component Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const about = {
  title: "About Me",
  description: "im just a guy that likes to build cool stuff and game",
  texts: [
    "Exploring what I like in tech. I&apos;ve been a founding developer at a YCombinator backed startup (Gumloop), developed Discord bots, Minecraft mods, Machine Learning algorithms, Cloud tools and more.",
    "Recently, I&apos;ve been exploring the world of generative AI, and am currently building a personal assistant, Zolyra.",
    "In my spare time, I like to go to the gym, listen to moody and lofi hip-hop, and play Rocket League (Diamond III in Duos) and The Legend of Zelda games.",
  ],
};

const experiences = {
  icon: "",
  title: "Experiences",
  description: "A timeline of my experiences and roles.",
  items: [
    {
      company_name: "Amazon AWS",
      url: "https://aws.amazon.com/",
      duration: "July 2024 - September 2024",
      iconBg: "#9ca3af",
      icon: "/images/aws.png",
      title: "Prequalified AI Scholar",
      points: [
        "Exploring Generative AI with AWS",
        "Prequalified for the AWS DeepRacer Scholarship",
        "Developed a Proximal Policy Optimization algorithm achieving lap times of under 2 minutes",
      ],
    },
    {
      company_name: "Gumloop (YCombinator W24)",
      url: "https://www.gumloop.com",
      duration: "January 2024 - Present",
      iconBg: "#f9a8d4",
      icon: "/images/gumloop.png",
      title: "Founding Developer",
      points: [
        "Developed an AI SaaS tool to allow users to create custom enterprise software with no code, achieving $40,000+ Monthly Recurring Revenue during the YCombinator batch, by shipping 270+ features.",
        "Integrated with 25+ providers including Gemini, OpenAI, Slack, Notion, Airtable and LinkedIn using Python & OAuth2.0, allowing users to link workspaces, CMS, and AI services to build comprehensive workflows.",
        "Engineered Gmail, Slack, and Airtable triggers to automate users' workflows using Google Cloud Platform, Pub/Sub notifications, and CRON scheduled Cloud Functions for refreshing expired triggers and following least privilege IAM policies.",
        "Maintained Google Kubernetes Engine clusters, and used Celery and Redis for worker management, enabling concurrent workflow steps per user and optimizing workflow runtimes by upto 1500%.",
        "Optimized Google Spanner SQL queries by using batch processing, reducing Spanner latency by over 90% for viewing historical automations.",
        "Designed and developed responsive AI Credit dashboards using React, Recharts and TailwindCSS to monitor LLM usage dynamically, enhancing user retention.",
      ],
    },
    {
      company_name: "UBC Computer Science",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7201404732668534784/",
      duration: "September 2023 - September 2024",
      iconBg: "#bfdbfe",
      icon: "/images/ubc.png",
      title: "Data Structures and Algorithms TA",
      points: [
        "Automated LeetCode porting with GPT-4, creating coding practice for students in a containerized setup.",
        "Led the exam development team, creating a Binary Search Tree to Priority Queue conversion assessment.",
        "Won the UBC Computer Science Undergraduate Teaching Assistant Award with 100% student satisfaction.",
      ],
    },
    {
      company_name: "University of British Columbia",
      url: "https://www.ubc.ca/",
      duration: "September 2022 - September 2026",
      iconBg: "#bfdbfe",
      icon: "/images/ubc.png",
      title: "Major in Computer Science",
      points: [
        "GPA: 4.33/4.33",
        "International Entrance Major Scholar [$80,000]",
        "Science Scholar + Dean's Honour List + J. Fred Muir Scholar",
        "Faculty of Science International Student Scholar [$10,000]",
      ],
    },
  ],
};

const Experiences = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiences"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experiences">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
              </div>
              <div className="my-12 flex">
                <div className="h-[60vh] overflow-y-auto pb-8 w-full border border-white/50 rounded-lg relative">
                  <div className="sticky left-0 top-0 mb-12 flex flex-row justify-between space-x-2 z-10 bg-gray-700 p-4 rounded-t-lg">
                    <div className="flex flex-row space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="h-5 bg-gray-500 text-white px-4 rounded-full text-sm opacity-90">
                      Experiences
                    </div>
                  </div>
                  <VerticalTimeline className="z-0">
                    {experiences.items.map((experience, index) => (
                      <VerticalTimelineElement
                        key={experience.company_name}
                        date={experience.duration}
                        iconStyle={{ background: experience.iconBg }}
                        icon={
                          <div className="flex justify-center items-center w-full h-full">
                            <img
                              src={experience.icon}
                              alt={experience.company_name}
                              className="w-[60%] h-[60%] object-contain"
                            />
                          </div>
                        }
                        contentStyle={{
                          borderBottom: "8px",
                          borderStyle: "solid",
                          borderBottomColor: experience.iconBg,
                          boxShadow: "none",
                        }}
                        visible={true}
                        textClassName={"text-primary xl:text-white"}
                      >
                        <div>
                          <h3 className="text-primary text-xl font-poppins font-semibold">
                            {experience.title}
                          </h3>
                          <p
                            className="text-primary hover:text-green-600 font-medium text-base transition-all"
                            style={{ margin: 0 }}
                          >
                            <a href={experience.url} target="_blank">
                              {experience.company_name}
                            </a>
                          </p>
                        </div>

                        <ul className="my-5 list-disc ml-5 space-y-2">
                          {experience.points.map((point, index) => (
                            <li
                              key={`experience-point-${index}`}
                              className="text-primary/90 font-normal pl-1 text-sm"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </VerticalTimelineElement>
                    ))}
                  </VerticalTimeline>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[80px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                {about.texts.map((text, index) => {
                  return (
                    <p
                      key={index}
                      className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                    >
                      {text}
                    </p>
                  );
                })}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Experiences;
