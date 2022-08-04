import type { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function ProjectTimeline({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}
