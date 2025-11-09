/**
 * Reusable Tailwind class strings
 * Only includes styles that are actually repeated across multiple components
 */

/**
 * Icon sizing - used in multiple components (dark-toggler, contact-button, etc)
 */
export const iconSize = {
  /** Small icon: w-4 h-4 md:w-5 md:h-5 */
  sm: "w-4 h-4 md:w-5 md:h-5",
  /** Tiny icon for footer: w-4 h-4 */
  xs: "w-4 h-4",
} as const;

/**
 * Text colors - used across components for secondary/muted text
 */
export const textColor = {
  /** Secondary text: gray-600 dark:gray-400 */
  secondary: "text-gray-600 dark:text-gray-400",
  /** Muted text: gray-700 dark:text-gray-400 */
  muted: "text-gray-700 dark:text-gray-400",
  /** Navigation link text */
  navLink: "text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500",
} as const;

/**
 * Spacing and layout utilities
 */
export const spacing = {
  /** Max content width wrapper */
  contentWrapper: "max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto",
  /** Navigation link item spacing */
  navItem: "snap-center shrink-0 pr-2 sm:pr-4 md:pr-8",
} as const;

/**
 * Background colors for light/dark mode
 */
export const bgColor = {
  /** Page background: white dark:slate-900 */
  page: "bg-white dark:bg-slate-900",
} as const;

/**
 * Button styles - footer icon buttons
 */
export const button = {
  /** Footer icon button - repeated 3 times */
  footerIcon: "inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800",
} as const;

/**
 * Page section styles - used in all 4 pages (About, Projects, Skills, Experiences)
 */
export const pageSection = {
  /** Page header with illustration grid layout */
  headerGrid: "pt-10 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center",
  /** Page title heading */
  title: "flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center",
  /** Description paragraph */
  description: "flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400",
  /** Illustration SVG container */
  illustrationContainer: "lg:col-span-3 mt-10 lg:mt-0 hidden lg:flex justify-end",
  /** Illustration SVG size */
  illustration: "w-112 h-112",
  /** Section subheading */
  sectionHeading: "text-2xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center",
  /** Text content grid in about page */
  contentGrid: "flex flex-col space-y-4 mt-7",
  /** Item with icon in about page */
  itemWithIcon: "flex items-center",
  /** Medium icon with margin */
  mediumIcon: "w-7 md:w-10 mr-2 h-auto",
  /** Item text */
  itemText: "text-base md:text-lg text-gray-800 dark:text-gray-300",
} as const;

/**
 * Combined icon + color - for SVG elements
 */
export const iconSecondary = `${iconSize.sm} ${textColor.secondary}`;
