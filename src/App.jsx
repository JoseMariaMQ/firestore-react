import React, {useState, useEffect} from 'react'
import {store} from "./firebaseconf";

function App() {

  const [nombre, setNombre] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    const getUsuarios = async () => {
      const {docs} = await  store.collection('agenda').get()
      const nuevoArray = docs.map(item => ({id: item.id, ...item.data()}))
      setUsuarios(nuevoArray)
    }
    getUsuarios()
  },[])

  const setUsuario = async (e) => {
    e.preventDefault()
    if (!nombre.trim()) {
      setError("El campo nombre está vacío")
    } else if (!phone.trim()) {
      setError("El campo teléfono está vacío")
    } else {
      const usuario = {
        nombre: nombre,
        telefono: phone
      }
      try {
        const data = await store.collection('agenda').add(usuario)
        const {docs} = await  store.collection('agenda').get()
        const nuevoArray = docs.map(item => ({id: item.id, ...item.data()}))
        setUsuarios(nuevoArray)
        alert('Usuario añadido')
        setNombre('')
        setPhone('')
        setError('')
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuarios</h2>
          <form onSubmit={setUsuario} className="form-group">
            <input value={nombre} onChange={(e) => {setNombre(e.target.value)}} className="form-control" placeholder="Introduce el nombre" type="text"/>
            <input value={phone} onChange={(e) => {setPhone(e.target.value)}} className="form-control mt-3" placeholder="Introduce el número" type="text"/>
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
          <ul>
            {
              usuarios.length !== 0 ?
              (
              usuarios.map(item => (
                  <li key={item.id}>{item.nombre} -- {item.telefono}</li>
              ))
              ) :
              (
              <span>
                No hay usuarios en tu agenda
              </span>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
