import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
}

export default function GradientText({ children }: GradientTextProps) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
      {children}
    </span>
  );
}