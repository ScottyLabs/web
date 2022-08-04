import styles from "./index.module.scss";

export type TypographyVariant = "header" | "subheader" | "body" | "subtitle";

const Typography = ({
  variant = "body",
  children,
  className = "",
}: {
  variant?: TypographyVariant;
  children?: string;
  className?: String;
}) => {
  return <div className={`${className} ${styles[variant]}`}>{children}</div>;
};

export default Typography;
