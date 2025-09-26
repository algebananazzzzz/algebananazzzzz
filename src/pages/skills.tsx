import React from "react"
import HomeLayout from "@/components/layout/home-layout"
import rawSkillsContent from '@/content/skills.yml';
import type { SkillsContent } from '@/types/skills';
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";

const skills: SkillsContent = rawSkillsContent;

const SkillsPage: React.FC<PageProps> = () => {

  return (
    <HomeLayout>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="pt-10 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
          <div className="lg:col-span-4">
            <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
              Skills
            </h1>
            {
              skills.description.map((value) => {
                return <p className="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
                  {value}
                </p>
              })
            }
          </div>
          <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:flex justify-end">
            <Svg name="theme/skills" className="w-112 h-112" />
          </div>
        </div>
        {skills.certificates && <>
          <p className="pt-12 lg:pt-0 text-2xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
            Professional Certificates
          </p>
          <div className="mt-5 flex flex-col space-y-4 text-gray-700 dark:text-gray-300 ">
            {skills.certificates.map((value) => {
              return <a href={value.link} target='blank'>
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
          <div className="pt-12 lg:pt-24 pb-10">
            <p className="text-2xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
              Skills
            </p>
            {skills.skillicons && <div className="mt-2 flex items-center gap-x-1 md:gap-x-2">
              {skills.skillicons.map((value) => {
                return <div className='inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-600 dark:text-gray-400'>
                  <Svg key={value} name={value} className="w-4 md:w-5"></Svg>
                </div>
              })}
            </div>}

            {skills.skills && Object.entries(skills.skills).map(([title, value]) => (
              <>
                <p className="pt-5 md:pt-7 text-lg md:text-xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
                  {title}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base md:text-lg text-gray-700 dark:text-gray-400">
                  {value.map((value) => {
                    return <li>
                      {value}
                    </li>
                  })}
                </ul>
              </>
            ))}
          </div>
        }
      </div>
    </HomeLayout >
  )
}

export default SkillsPage

export const Head = () => <title>Algebananazzzzz</title>