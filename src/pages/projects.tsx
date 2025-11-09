import React, { useState } from "react"
import HomeLayout from "@/components/layout/home-layout"
import VideoPopupComponent from "@/components/ui/video-popup"
import rawProjectContent from '@/content/project.yml';
import type { ProjectContent } from '@/types/projects';
import ProjectCard from "@/components/ui/project-card"
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";
import { pageSection } from "@/styles/tailwind-utils";

const projects: ProjectContent = rawProjectContent;

const ProjectPage: React.FC<PageProps> = () => {
  const [popup, setPopup] = useState<string | null>(null)
  return (
    <HomeLayout>
      <VideoPopupComponent popup={popup} setPopup={setPopup} />
      <div className={pageSection.headerGrid}>
        <div className="lg:col-span-4">
          <h1 className={pageSection.title}>
            Projects
          </h1>
          {
            projects.description.map((value, i) => {
              return <p key={`desc-${i}`} className={pageSection.description}>
                {value}
              </p>
            })
          }
        </div>
        <div className={pageSection.illustrationContainer}>
          <Svg name="theme/projects" className={pageSection.illustration} alt="Projects illustration" />
        </div>
      </div>
      <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.projects.map(project => <ProjectCard key={project.name} project={project} setPopup={setPopup} />)}
      </div>
    </HomeLayout >
  )
}

export default ProjectPage

export const Head = () => (
  <>
    <title>Daniel Zhou - Projects</title>
    <meta name="description" content="Daniel Zhou's projects and work in cloud solutions, containerization, and DevOps." />
    <meta name="author" content="Daniel Zhou" />
    <meta property="og:title" content="Daniel Zhou - Projects" />
    <meta property="og:description" content="Daniel Zhou's projects and work in cloud solutions, containerization, and DevOps." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@algebananazzzzz" />
  </>
)