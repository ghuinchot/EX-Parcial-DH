function Card({ nombre, descripcion }) {
  return (
    <div>
      <h2>Personaje de Breaking Bad</h2>
      <p>Nombre: {nombre}</p>
      <p>Descripción: {descripcion}</p>
    </div>
  )
}

export default Card