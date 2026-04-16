"use client";

import { forwardRef } from "react";

export const AutoExpandingTextarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, onChange, ...props }, ref) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = scrollHeight > 120 ? `${scrollHeight}px` : "120px";
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      ref={ref}
      className={className}
      onChange={handleInput}
      {...props}
      style={{ overflow: "hidden", resize: "none", minHeight: "120px", ...props.style }}
    />
  );
});

AutoExpandingTextarea.displayName = "AutoExpandingTextarea";
