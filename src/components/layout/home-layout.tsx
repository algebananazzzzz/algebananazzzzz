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

const navbar = rawNavbarContent as NavbarContent;

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme, changeTheme } = React.useContext(ThemeContext)

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
        <body className="min-h-screen bg-white dark:bg-slate-900">
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
                <nav className="bg-white dark:bg-slate-900 z-10 sticky -top-px text-sm md:text-base font-medium text-black border-t border-b md:border-b-0 py-3 sm:py-4 md:py-5 -mt-px border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl snap-x w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className='flex'>
                            <div className="snap-center shrink-0 pr-2 sm:pr-4 md:pr-8 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-yellow-600 to-rose-700 text-transparent dark:from-orange-400 dark:to-rose-500' className="inline-flex items-center" to="/skills">Skills</Link>
                            </div>
                            <div className="snap-center shrink-0 pr-2 sm:pr-4 md:pr-8 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-blue-700 to-emerald-600 text-transparent dark:from-blue-500 dark:to-emerald-400' className="inline-flex items-center" to="/projects">Projects</Link>
                            </div>
                            <div className="snap-center shrink-0 pr-2 sm:pr-4 md:pr-8 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-pink-700 to-indigo-600 text-transparent dark:from-pink-500 dark:to-indigo-600' className="inline-flex items-center" to="/experiences">Experiences</Link>
                            </div>
                            {navbar.external_links && navbar.external_links.map((value) => {
                                return <div className="snap-center shrink-0 pr-2 sm:pr-4 md:pr-8 text-gray-800 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                                    <DynamicLink link={value.link} asset={value.asset} text={value.title} />
                                </div>
                            })}
                        </div>
                        <ThemeToggler theme={theme} changeTheme={changeTheme}></ThemeToggler>
                    </div>
                </nav>
                {children}
            </main>
        </body >
        <footer className="bg-white dark:bg-slate-900 mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center text-gray-600 dark:text-gray-400">
                <p >Last updated on {data.site.siteMetadata.lastUpdated}</p>
                <p >Crafted and deployed using these technologies</p>
                <div className="mt-3 space-x-2 flex items-center justify-center">
                    <a aria-label="gatsbyjs" href="https://www.gatsbyjs.com" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <GatsbyLogo className="w-4 h-4" />
                    </a>
                    <a aria-label="react" href="https://react.dev" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <ReactLogo className="w-4 h-4" />
                    </a>
                    <a aria-label="tailwind" href="https://tailwindcss.com" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <TailwindLogo className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    </>
}

export default HomeLayout