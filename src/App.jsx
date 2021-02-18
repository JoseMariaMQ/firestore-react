import React, {useState, useEffect} from 'react'

function App() {

  const [nombre, setNombre] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")
  const [usuario, setUsuario] = useState([])

  const setUsuarios = (e) => {
    e.preventDefault()
    if (!nombre.trim()) {
      setError("El campo nombre está vacío")
      return
    }
    if (!phone.trim()) {
      setError("El campo teléfono está vacío")
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuarios</h2>
          <form onSubmit={setUsuarios} className="form-group">
            <input onChange={(e) => {setNombre(e.target.value)}} className="form-control" placeholder="Introduce el nombre" type="text"/>
            <input onChange={(e) => {setPhone(e.target.value)}} className="form-control mt-3" placeholder="Introduce el número" type="text"/>
            <input className="btn btn-dark btn-block mt-3" type="submit" value="Registrar"/>
          </form>
          {
            error ?
                (
                    <div>
                      <p>{error}</p>
                    </div>
                ) :
                (
                    <span/>
                )
          }
        </div>
        <div className="col">
          <h2>Lista de tu Agenda</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
