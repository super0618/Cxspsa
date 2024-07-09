import styles from "./styles.module.css";

interface Content {
  children: React.ReactNode;
}

const Content = ({ children }: Content) => {
  return <div className={styles.main}>{children}</div>;
};

export default Content;
