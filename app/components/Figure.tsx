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
    <figure className={`mx-auto ${fullWidth ? "w-full" : " max-w-sm"}`}>
      {children}
      {caption && (
      <figcaption className={`text-xs text-gray-500 -mx-10 ${centered ? "text-center" : ""}`}>
        <ReactMarkdown>{caption}</ReactMarkdown>
      </figcaption>
      )}
    </figure>
  );
}
