const Card = ({ data }) => {
  console.log("Pokemon Props", data);
  return (
    <div className="card">
      <div className="name">{data.name}</div>
      <img
        src={data.image}
        alt={data.name}
        style={{ height: "100px", width: "100px" }}
      />
    </div>
  );
};

export default Card;
