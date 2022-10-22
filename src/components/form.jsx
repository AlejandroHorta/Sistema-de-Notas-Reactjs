// Importar el hook de useState
import { useState } from "react";
export default function FormNotas() {
  // Definir las varibales dde estado del formulairo, a traves de el hook useState
  const [fullname, setFullname] = useState(""); // valor predeterminado del estado
  const [identy, setidenty] = useState("");
  let [mater, setmater] = useState("");
  let [nota1, setnota1] = useState("");
  let [nota2, setnota2] = useState("");
  let [nota3, setnota3] = useState("");
  let [Definitiva, setDefinitiva] = useState("");
  let [Observacion, setObservacion] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      identy !== "" &&
      fullname !== "" &&
      nota1 !== "" &&
      nota2 !== "" &&
      nota3 !== ""
    ) {
      if (
        nota1 < 0 ||
        nota1 > 5 ||
        nota2 > 5 ||
        nota2 < 0 ||
        nota3 < 0 ||
        nota3 > 5
      ) {
        alert("Las notas deben ser mayores que 0 y menores que 5");
      } else {
        setDefinitiva(
          parseFloat(nota1 * 0.3) +
            parseFloat(nota2 * 0.35) +
            parseFloat(nota3 * 0.35)
        );
        if (Definitiva < 2.0) {
          setObservacion("Perdió la materia");
        } if(Definitiva >= 3.0) {
          setObservacion("Ganó la materia");
        } else {
          setObservacion("Habilita la materia")
        }
      }
    } else {
      alert("Todos los datos obligatorios");
    }
  }

  function Limpiar(event){
    event.preventDefault();
    setFullname("");
    setidenty("");
    setmater("");
    setnota1("");
    setnota2("");
    setnota3("");
    setDefinitiva("");
    setObservacion("");
  }

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="fullname" className="col-form-label" id="texto1">
              Nombre Completo
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Nombre Completo"
              className="form-control"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="identy" className="col-form-label"  id="texto2">
              Identificación
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="identy"
              name="identy"
              placeholder="Ingresa la identificación"
              className="form-control"
              onChange={(event) => setidenty(event.target.value)}
              value={identy}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="identy" className="col-form-label"  id="texto3">
              Materia
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="text"
              id="mater"
              name="mater"
              placeholder="Nombre de la materia"
              className="form-control"
              onChange={(event) => setmater(event.target.value)}
              value={mater}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="nota1" className="col-form-label"  id="texto3">
              Nota 1
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="nota1"
              name="vnota1"
              placeholder="Ingrese la nota 1"
              className="form-control"
              onChange={(event) => setnota1(event.target.value)}
              value={nota1}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="nota2" className="col-form-label"  id="texto4">
              Nota 2
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="nota2"
              name="vnota2"
              placeholder="Ingrese la nota 2"
              className="form-control"
              onChange={(event) => setnota2(event.target.value)}
              value={nota2}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="nota2" className="col-form-label"  id="texto5">
              Nota 3
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="nota3"
              name="vnota3"
              placeholder="Ingrese la nota 3"
              className="form-control"
              onChange={(event) => setnota3(event.target.value)}
              value={nota3}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="Definitiva" className="col-form-label" id="texto6">
              Definitiva
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="Definitiva"
              name="Definitiva"
              className="form-control"
              onChange={(event) => setDefinitiva(event.target.value)}
              value={Definitiva}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="observacion" className="col-form-label" id="texto7">
              Observación
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="ntext"
              id="Observacion"
              name="Observacion"
              className="form-control"
              onChange={(event) => setObservacion(event.target.value)}
              value={Observacion}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <button className="btn btn-success btn-sm my-1 w-25 col-sm-12 col-md-6">
              Calcular
            </button>
          </div>
          <div className="col-sm-12 col-md-6">
          
              <button className="btn btn-success  mt-2 w-25" onClick={Limpiar}>
                Limpiar campos
              </button>
          </div>
        </div>
      </form>
    </div>
  );
}