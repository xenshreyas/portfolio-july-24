"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Component Imports
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shreyas_Goyal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hey, I'm <br /> <span className="text-accent">Shreyas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              YCombinator Graduate, Software Developer, Teaching Assistant,
              Startup Founder & AWS Scholar. Currently automating AI Workflows @{" "}
              <a
                href="https://www.gumloop.com"
                target="_blank"
                className="text-pink-400 hover:text-pink-500 hover:border-b-2 border-pink-400 hover:border-pink-500 transition-all"
              >
                Gumloop
              </a>
              .
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
