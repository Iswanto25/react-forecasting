
import React from "react";

export default function Card({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <div
      className={`rounded-lg bg-slate-800 border-2 border-gray-700 ${className}`}>
      {children}
    </div>
  );
}
