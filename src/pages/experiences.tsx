import React, { useState } from "react"
import HomeLayout from "@/components/layout/home-layout"
import VideoPopupComponent from "@/components/ui/video-popup"
import ActionButton from '@/components/ui/action-button';
import rawExperienceContent from '@/content/experience.yml';
import type { ExperiencesContent } from '@/types/experiences';
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";
import { pageSection } from "@/styles/tailwind-utils";

const experiences: ExperiencesContent = rawExperienceContent;


const ExperiencePage: React.FC<PageProps> = () => {
  const [popup, setPopup] = useState<string | null>(null)

  return (
    <HomeLayout>
      <VideoPopupComponent popup={popup} setPopup={setPopup} />
      <div className={pageSection.headerGrid}>
        <div className="lg:col-span-4">
          <h1 className={pageSection.title}>
            Experiences
          </h1>
          {
            experiences.description.map((value, idx) => (
              <p key={`desc-${idx}`} className={pageSection.description}>
                {value}
              </p>
            ))
          }
        </div>
        <div className={pageSection.illustrationContainer}>
          <Svg name="theme/experiences" className={pageSection.illustration} alt="Experiences illustration" />
        </div>
      </div>
      <ol className="mt-12 lg:mt-0 ml-3 lg:max-w-5xl text-justify relative border-l-2 border-solid border-gray-200 dark:border-gray-700">
        {experiences.experiences.map((exp, i, row) => (
          <li key={`exp-${exp.name}-${i}`} className={`ml-4 md:ml-6 ${i !== (row.length - 1) && "pb-8 md:pb-12"}`}>
            <div className="inline-flex items-center">
              <span className={`absolute flex items-center text-center justify-center w-5 h-5 md:w-7 md:h-7 rounded-full -left-2.5 md:-left-3.5 ring-8 ring-white dark:ring-gray-900 bg-${exp.color}-500 dark:bg-${exp.color}-800`}>
                <svg className="w-3 md:w-4" viewBox="0 0 24 24" fill="#f9fafb">
                  <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                </svg>
              </span>
              <p className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-gray-200">
                {exp.name}
              </p>
            </div>
            <p className="mt-2 mb-4 text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
              {exp.date}
            </p>
            {exp.description.map((value) => {
              return <p key={value} className="mt-2 text-base text-gray-700 dark:text-gray-400">
                {value}
              </p>
            })}
            {
              exp.actions && <div className="mt-6 flex gap-x-2">
                {exp.actions.map((action, idx) => {
                  return <ActionButton
                    key={idx}
                    text={action.text}
                    action={action.video ? () => { if (action.video) setPopup?.(action.video); } : undefined}
                    asset={action.asset}
                    link={action.link}
                    color={action.color}
                  />
                })}
              </div>
            }
          </li>
        ))}
      </ol>
    </HomeLayout>
  )
}

export default ExperiencePage

export const Head = () => (
  <>
    <title>Daniel Zhou - Experiences</title>
    <meta name="description" content="Daniel Zhou's professional experience and work history in Solutions Architecture and DevOps." />
    <meta name="author" content="Daniel Zhou" />
    <meta property="og:title" content="Daniel Zhou - Experiences" />
    <meta property="og:description" content="Daniel Zhou's professional experience and work history in Solutions Architecture and DevOps." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@algebananazzzzz" />
  </>
)