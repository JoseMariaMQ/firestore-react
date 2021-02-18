import React from 'react'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuarios</h2>
          <form className="form-group">
            <input className="form-control" placeholder="Introduce el nombre" type="text"/>
            <input className="form-control mt-3" placeholder="Introduce el número" type="text"/>
            <input className="btn btn-dark btn-block mt-3" type="submit" value="Registrar"/>
          </form>
        </div>
        <div className="col">
          <h2>Lista de tu Agenda</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
