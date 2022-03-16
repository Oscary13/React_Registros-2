import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function App() {
  const baseUrl = "https://api-codigos.herokuapp.com/api/codigo/";
  const [data, setData] = useState([]);
  const [datos, setDatos] = useState({
    codigo: "",
  });

  // const url = String(baseUrl + datos.codigo);
  // console.log(url);

  const handleChange=(event)=>{
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value

    })
    const peticionGet = async () => {

      await axios
        .get(baseUrl+ event.target.value)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    peticionGet();

  }

  // const peticionGet = async () => {

  //   await axios
  //     .get(url)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  

  // useEffect(() => {
  //   peticionGet();
  // }, []);

  return (
    <div className="container">
      <br />
      <from class="form">
        <label for="name">
          <strong>INGRESA CODIGO POSTAL:</strong>
        </label>
        <input
        class="i"
          name="codigo"
          type="number"
          className="form-control"
          placeholder="Ingresa tu Codigo Postal"
          onChange={handleChange}
        ></input>
        <br/>
        <br />
        <table class="normal">
          <thead>
            <tr>
              <th>
                <strong>Asentamiento</strong>
              </th>
              <th>
                <strong>Tipo asentamiento</strong>
              </th>
              <th>
                <strong>Municipio</strong>
              </th>
              <th>
                <strong>Estado</strong>
              </th>
              <th>
                <strong>Ciudad</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <th>
              <select>
                {data.map((registro) => (
                  <option value={registro.asentamiento}>
                    {registro.asentamiento}
                  </option>
                ))}
              </select>
            </th>

            <th>
              <select>
                {data.map((registro) => (
                  <option value={registro.tipo_asenta}>
                    {registro.tipo_asenta}
                  </option>
                ))}
              </select>
            </th>

            <th>
              <select>
                {data.map((registro) => (
                  <option value={registro.municipio}>
                    {registro.municipio}
                  </option>
                ))}
              </select>
            </th>

            <th>
              <select>
                {data.map((registro) => (
                  <option value={registro.estado}>{registro.estado}</option>
                ))}
              </select>
            </th>

            <th>
              <select>
                {data.map((registro) => (
                  <option value={registro.ciudad}>{registro.ciudad}</option>
                ))}
              </select>
            </th>
          </tbody>
        </table>
      </from>
    </div>
  );
}

export default App;
