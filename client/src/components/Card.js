import "../styles/card.css"

export default function Card({ image, name, origin, species, episodes }) {
  return (
    <div className="card" key={name}>
      <h1>{name}</h1>
      <img src={image} alt={`Imagen de ${name}`} />
      <h2>{species}</h2>
      <h3>{origin}</h3>
      <h4>{episodes}</h4>
    </div>
  );
}
