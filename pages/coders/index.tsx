import styles from "../../styles/Coders.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data },
  };
};

const Coders = ({ coders }) => {
  return (
    <div>
      <h1>Coders</h1>
      {coders.map((coder) => (
        <div key={coder.id}>
          <a className={styles.single}>
            <h3>{coder.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Coders;
