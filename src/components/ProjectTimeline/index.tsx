import { ReactElement } from "react";
import Project from "../Project";

interface Props {
  className?: string;
  children?: ReactElement | ReactElement[];
}

export default function ProjectTimeline({ className = "", children }: Props) {
  return <div>{children}</div>;
}
