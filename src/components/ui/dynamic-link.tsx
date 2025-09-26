import React, { ReactNode } from "react";

type DynamicLinkProps = {
  text: string;
  link?: string;   // external link
  asset?: string;  // filename under /static
  className?: string;
  download?: boolean;
  children?: ReactNode; // optional children
};

const DynamicLink: React.FC<DynamicLinkProps> = ({ text, link, asset, className, download, children }) => {
  const content = children ?? text;

  // Case 1: static asset from /static
  if (asset) {
    return (
      <a
        href={`/${asset}`}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...(download ? { download: true } : {})}
      >
        {content}
      </a>
    );
  }

  if (link) {
    return (
      <a href={link} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
};

export default DynamicLink;
