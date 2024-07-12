import clsx from "clsx";
import styles from "./styles.module.css";

interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <div
      className={clsx([styles["icon-button"], props.className || ""])}
      {...props}
    >
      {children}
    </div>
  );
};

export { IconButton };
