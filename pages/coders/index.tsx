import styles from "../../styles/Coders.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data },
  };
};

const Coders = ({ coders }:any) => {
  return (
    <div>
      <h1>Coders</h1>
      {coders.map((coder:any) => (
        <Link href={"coders/" + coder.id} key={coder.id}>
          <a className={styles.single}>
            <h3>{coder.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Coders;
