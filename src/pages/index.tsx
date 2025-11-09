import React from "react"
import HomeLayout from "@/components/layout/home-layout"
import rawAboutContent from '@/content/aboutme.yml';
import type { AboutContent } from '@/types/about';
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";
import { pageSection } from "@/styles/tailwind-utils";

const about: AboutContent = rawAboutContent;

const IndexPage: React.FC<PageProps> = () => {

  return (
    <HomeLayout>
      <div className={pageSection.headerGrid}>
        <div className="lg:col-span-4">
          <h1 className={pageSection.title}>
            {about.title}
          </h1>
          {
            about.description.map((value, idx) => {
              return <p key={`desc-${idx}`} className={pageSection.description}>
                {value}
              </p>
            })
          }
        </div>
        <div className={pageSection.illustrationContainer}>
          <Svg name="theme/home" className={pageSection.illustration} alt="Home illustration" />
        </div>
      </div>
      {about.about && Object.entries(about.about).map(([header, items], idx) => (
        <div
          className={idx === 0 ? 'pt-12 lg:pt-0' : 'pt-8 md:pt-12'}
          key={header}>
          <div className="flex justify-between items-center">
            <p className={pageSection.sectionHeading}>
              {header}
            </p>
          </div>
          <div className={pageSection.contentGrid}>
            {items.map((value, idx) => (
              <div className={pageSection.itemWithIcon} key={idx}>
                {value.svgName && <Svg name={value.svgName} className={pageSection.mediumIcon} />}
                <p className={pageSection.itemText}>
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

export const Head = () => (
  <>
    <title>About</title>
    <meta name="description" content="About me and my background." />
    <meta property="og:title" content="About" />
    <meta property="og:description" content="About me and my background." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
  </>
)