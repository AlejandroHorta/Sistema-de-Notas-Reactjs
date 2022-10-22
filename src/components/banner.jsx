export default function Banner() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4 w-50"
        src="https://totumat.files.wordpress.com/2020/03/calificaciones.jpg"
        alt=""
      />
      <h1 className="display-5 fw-bold">Sistema de Notas</h1>
      <div className="col-lg-10 mx-auto">
        <p className="lead mb-4">
          En esta aplicacion vas a poder calcular tus notas.
        </p>
      </div>
    </div>
  );
}
