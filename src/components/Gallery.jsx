import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "./Card";

export const Gallery = () => {
  const pageItems = 20;
  const QUERY = gql`
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
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Opps an Error Occured</div>;
  console.log(data);
  return (
    <div className="gallery container">
      <h2>Pokemon Gallery</h2>
      {data.pokemons.map((e) => {
        return <Card data={e} key={e.id} />;
      })}
    </div>
  );
};
