import styles from "../styles/Card.module.css";

const Card = ({ data }) => {
  console.log("Pokemon Props", data);
  const typeColor = {
    Bug: styles.bg_color_bug,
    Dragon: styles.bg_color_dragon,
    Dark: styles.bg_color_dark,
    Electric: styles.bg_color_electric,
    Fairy: styles.bg_color_fairy,
    Fighting: styles.bg_color_fighting,
    Fire: styles.bg_color_fire,
    Flying: styles.bg_color_flying,
    Ghost: styles.bg_color_ghost,
    Grass: styles.bg_color_grass,
    Ground: styles.bg_color_ground,
    Ice: styles.bg_color_ice,
    Normal: styles.bg_color_normal,
    Poison: styles.bg_color_poison,
    Psychic: styles.bg_color_psychic,
    Rock: styles.bg_color_rock,
    Steel: styles.bg_color_steel,
    Water: styles.bg_color_water,
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={data.image} alt={data.name} />
      <div className={styles.details}>
        <div className={styles.number}>{data.number}</div>
        <div className={styles.name}>{data.name}</div>
        <ul>
          {data?.types.map((type) => (
            <div className={`${styles.type} ${typeColor[`${type}`]}`}>
              {type}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
