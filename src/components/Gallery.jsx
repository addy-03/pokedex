import { gql, useQuery } from "@apollo/client";
import Card from "./Card";
import Loading from "./Loading";
import styles from "../styles/Gallery.module.css";

export const Gallery = () => {
  const pageItems = 100;
  const Pokemon_Query = gql`
    query pokemons($first: Int = ${pageItems}) {
      pokemons(first: $first) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  `;
  const { loading, error, data } = useQuery(Pokemon_Query);
  if (loading) return <Loading />;
  if (error) return <div className="error">Opps an Error Occured</div>;
  console.log(data);
  return (
    <div className={styles.container}>
      {/* <Loading /> */}
      <h2 className={styles.heading}>Pokemon Gallery</h2>
      <ul className={styles.list}>
        {data.pokemons.map((e) => {
          return <Card data={e} key={e.id} />;
        })}
      </ul>
    </div>
  );
};
