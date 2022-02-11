import Link from "next/link";
import styles from "../styles/Home.module.css";
console.log("hi");

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Welcome to <br />
        sanity.io and Next.js Blog Tutorial
      </h1>
      <Link href="/blog">
        <a
          style={{
            color: "blue",
            fontWeight: "bold",
            textDecoration: "underLIne",
          }}
        >
          Blog
        </a>
      </Link>
    </div>
  );
}
