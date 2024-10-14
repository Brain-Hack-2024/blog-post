import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Figure({
  children,
  caption,
  centered=false,
  fullWidth=false,
}: {
  children: React.ReactNode;
  caption?: string;
  centered?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <figure className={`mx-auto ${fullWidth ? "w-full" : "max-w-sm px-8 sm:px-0"}`}>
      {children}
      {caption && (
      <figcaption className={`text-xs text-gray-500 lg:-mx-10 ${centered ? "text-center" : ""}`}>
        <ReactMarkdown>{caption}</ReactMarkdown>
      </figcaption>
      )}
    </figure>
  );
}
