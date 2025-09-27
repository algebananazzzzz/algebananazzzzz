import React from "react"
import HomeLayout from "@/components/layout/home-layout"
import rawAboutContent from '@/content/aboutme.yml';
import type { AboutContent } from '@/types/about';
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";

const about: AboutContent = rawAboutContent;

const IndexPage: React.FC<PageProps> = () => {

  return (
    <HomeLayout>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="pt-10 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
          <div className="lg:col-span-4">
            <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
              {about.title}
            </h1>
            {
              about.description.map((value) => {
                return <p className="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
                  {value}
                </p>
              })
            }
          </div>
          <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:flex justify-end">
            <Svg name="theme/home" className="w-112 h-112" />
          </div>
        </div>
      </div>
      {about.about && Object.entries(about.about).map(([header, items], idx) => (
        <div
          className={`max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ${idx === 0 ? 'pt-12 lg:pt-0' : 'pt-8 md:pt-12'}`}
          key={header}>
          <div className="flex justify-between items-center">
            <p className="text-2xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
              {header}
            </p>
          </div>
          <div className="flex flex-col space-y-4 mt-7">
            {items.map((value, idx) => (
              <div className='flex items-center' key={idx}>
                {value.svgName && <Svg name={value.svgName} className="w-7 md:w-10 mr-2 h-auto" />}
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-300">
                  {value.text}
                </p>
              </div>
            ))
            }
          </div>
        </div>
      ))}

    </HomeLayout>
  )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>