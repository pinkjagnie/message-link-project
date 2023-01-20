import styles from "./layout.module.css";

function Layout(props) {
  return (
    <>
      <main className={styles.mainLayout}>{props.children}</main>
    </>
  );
}

export default Layout;