import { useState } from 'react'
import Card from './Card'

function App() {
  // Estados para los inputs
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [error, setError] = useState("")
  const [mostrarCard, setMostrarCard] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validaciones requeridas
    if (nombre.trim().length < 3 || nombre.startsWith(' ')) {
      setError("Por favor chequea que la información sea correcta")
      setMostrarCard(false)
      return
    }

    if (descripcion.length < 6) {
      setError("Por favor chequea que la información sea correcta")
      setMostrarCard(false)
      return
    }

    // Si pasa las validaciones
    setError("")
    setMostrarCard(true)
  }

  return (
    <div className="App">
      <h1>Personajes de Breaking Bad</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre del personaje"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Descripción del personaje"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
      {mostrarCard && <Card nombre={nombre} descripcion={descripcion} />}
    </div>
  )
}

export default App