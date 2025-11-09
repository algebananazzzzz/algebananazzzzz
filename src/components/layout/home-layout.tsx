import * as React from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '@/components/theme/theme-context';
import type { NavbarContent } from "@/types/navbar";
import rawNavbarContent from '@/content/navbar.yml'
import ThemeToggler from '@/components/theme/dark-toggler';
import ContactButton from "@/components/ui/contact-button"
import DynamicLink from '@/components/ui/dynamic-link'
import GatsbyLogo from "@/assets/svg/gatsby.svg";
import ReactLogo from "@/assets/svg/reactjs.svg";
import TailwindLogo from "@/assets/svg/tailwind.svg";
import { graphql, useStaticQuery } from "gatsby";
import ErrorBoundary from "@/components/error-boundary";
import { spacing, bgColor, textColor, button, iconSize } from "@/styles/tailwind-utils";

const navbar = rawNavbarContent as NavbarContent;

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lastUpdated
        }
      }
    }
  `);

    return <>
        <body className={`min-h-screen ${bgColor.page}`}>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b text-sm py-3 sm:py-4 md:py-5 dark:border-gray-800">
                <nav className="max-w-7xl flex justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mr-5 md:mr-8">
                        <Link className="flex-none text-lg md:text-xl font-semibold dark:text-white" to="/">{navbar.title}</Link>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        {navbar.contact_buttons.map((value, i) => {
                            return <ContactButton key={i} svgName={value.svgName} link={value.link}>
                            </ContactButton>
                        })}
                    </div>
                </nav>
            </header>
            <main id="content" role="main">
                <nav className={`${bgColor.page} z-10 sticky -top-px text-sm md:text-base font-medium text-black border-t border-b md:border-b-0 py-3 sm:py-4 md:py-5 -mt-px border-gray-200 dark:border-gray-800`}>
                    <div className={`${spacing.contentWrapper} snap-x w-full flex justify-between items-center`}>
                        <div className='flex'>
                            <div className={`${spacing.navItem} ${textColor.navLink}`}>
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-yellow-600 to-rose-700 text-transparent dark:from-orange-400 dark:to-rose-500' className="inline-flex items-center" to="/skills">Skills</Link>
                            </div>
                            <div className={`${spacing.navItem} ${textColor.navLink}`}>
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-blue-700 to-emerald-600 text-transparent dark:from-blue-500 dark:to-emerald-400' className="inline-flex items-center" to="/projects">Projects</Link>
                            </div>
                            <div className={`${spacing.navItem} ${textColor.navLink}`}>
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-pink-700 to-indigo-600 text-transparent dark:from-pink-500 dark:to-indigo-600' className="inline-flex items-center" to="/experiences">Experiences</Link>
                            </div>
                            {navbar.external_links && navbar.external_links.map((value, idx) => {
                                return <div key={`external-link-${idx}`} className={`${spacing.navItem} ${textColor.navLink}`}>
                                    <DynamicLink link={value.link} asset={value.asset} text={value.title} />
                                </div>
                            })}
                        </div>
                        <ThemeToggler theme={theme} toggleTheme={toggleTheme}></ThemeToggler>
                    </div>
                </nav>
                <div className={spacing.contentWrapper}>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </div>
            </main>
        </body >
        <footer className={`${bgColor.page} mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto`}>
            <div className={`text-center ${textColor.secondary}`}>
                <p >Last updated on {data.site.siteMetadata.lastUpdated}</p>
                <p >Crafted and deployed using these technologies</p>
                <div className="mt-3 space-x-2 flex items-center justify-center">
                    <a aria-label="gatsbyjs" href="https://www.gatsbyjs.com" className={button.footerIcon}>
                        <GatsbyLogo className={iconSize.xs} />
                    </a>
                    <a aria-label="react" href="https://react.dev" className={button.footerIcon}>
                        <ReactLogo className={iconSize.xs} />
                    </a>
                    <a aria-label="tailwind" href="https://tailwindcss.com" className={button.footerIcon}>
                        <TailwindLogo className={iconSize.xs} />
                    </a>
                </div>
            </div>
        </footer>
    </>
}

export default HomeLayout