import "../styles/card.css";

export default function Card({ id, image, name, origin, species, episodes }) {
  return (
    <div className="card" key={id}>

      <div className="name">
        <h1>{name}</h1>
      </div>

      <div className="imagen">
        <img src={image} alt={`Imagen de ${name}`} />
      </div>

      <div className="details">
        <h2>Especie: {species}</h2>
        <h3>Origen: {origin}</h3>
        <h4>{episodes}</h4>
      </div>
    </div>
  );
}
