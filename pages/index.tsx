import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        deleniti laudantium, ab labore quod illum eius fuga in commodi eum odit
        distinctio quasi repellendus ratione optio quidem eligendi possimus
        suscipit dicta necessitatibus praesentium ipsum ad totam. Assumenda modi
        nihil quod?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        deleniti laudantium, ab labore quod illum eius fuga in commodi eum odit
        distinctio quasi repellendus ratione optio quidem eligendi possimus
        suscipit dicta necessitatibus praesentium ipsum ad totam. Assumenda modi
        nihil quod?
      </p>
      <Link href="/coders">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
