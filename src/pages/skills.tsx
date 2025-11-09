import React from "react"
import HomeLayout from "@/components/layout/home-layout"
import rawSkillsContent from '@/content/skills.yml';
import type { SkillsContent } from '@/types/skills';
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";
import { pageSection } from "@/styles/tailwind-utils";

const skills: SkillsContent = rawSkillsContent;

const SkillsPage: React.FC<PageProps> = () => {

  return (
    <HomeLayout>
      <div className={pageSection.headerGrid}>
        <div className="lg:col-span-4">
          <h1 className={pageSection.title}>
            Skills
          </h1>
          {skills.description.map((value, idx) => {
            return <p key={`desc-${idx}`} className={pageSection.description}>
              {value}
            </p>
          })}
        </div>
        <div className={pageSection.illustrationContainer}>
          <Svg name="theme/skills" className={pageSection.illustration} alt="Skills illustration" />
        </div>
      </div>
      {skills.certificates && <>
        <p className={`pt-12 lg:pt-0 ${pageSection.sectionHeading}`}>
          Professional Certificates
        </p>
        <div className="mt-5 flex flex-col space-y-4 text-gray-700 dark:text-gray-300 ">
          {skills.certificates.map((value, idx) => {
            return <a key={`cert-${idx}`} href={value.link} target='blank'>
              <p className="hover:text-blue-600 dark:hover:text-blue-500 text-base md:text-lg text-gray-900 dark:text-gray-200 inline-flex items-center">
                <div className="mr-2 h-auto">
                  <Svg name={value.svgName} className="w-5 h-5 md:w-7 md:h-7"></Svg>
                </div>
                {value.text}
              </p>
            </a>
          })}
        </div>
      </>
      }
      {(skills.skills || skills.skillicons) &&
        <div className={`${skills.certificates && 'pt-12 lg:pt-24'} pb-10`}>
          <p className={pageSection.sectionHeading}>
            Skills
          </p>
          {skills.skillicons && <div className="mt-2 flex items-center gap-x-1 md:gap-x-2">
            {skills.skillicons.map((value, idx) => {
              return <div key={`skillicon-${idx}`} className='inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-900 dark:text-gray-200'>
                <Svg name={value} className="w-4 md:w-5"></Svg>
              </div>
            })}
          </div>}

          {skills.skills && Object.entries(skills.skills).map(([title, value]) => (
            <React.Fragment key={title}>
              <p className="pt-5 md:pt-7 text-lg md:text-xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
                {title}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-base md:text-lg text-gray-700 dark:text-gray-400">
                {value.map((value, idx) => {
                  return <li key={`skill-${title}-${idx}`}>
                    {value}
                  </li>
                })}
              </ul>
            </React.Fragment>
          ))}
        </div>
      }
    </HomeLayout >
  )
}

export default SkillsPage

export const Head = () => (
  <>
    <title>Skills</title>
    <meta name="description" content="My skills and expertise." />
    <meta property="og:title" content="Skills" />
    <meta property="og:description" content="My skills and expertise." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
  </>
)