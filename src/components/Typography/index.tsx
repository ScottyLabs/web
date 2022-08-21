import clsx from "clsx";
import styles from "./index.module.scss";

export type TypographyVariant =
  | "hero"
  | "header"
  | "subheader"
  | "body"
  | "subtitle"
  | "button";

const Typography = ({
  variant = "body",
  children,
  className = "",
}: {
  variant?: TypographyVariant;
  children?: string;
  className?: String;
}) => {
  return <div className={clsx(className, styles[variant])}>{children}</div>;
};

export default Typography;
