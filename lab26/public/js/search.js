document.getElementById("buscar").onkeyup = () => {
  const valor_busqueda = document.getElementById("buscar").value;
  //función que manda la petición asíncrona
  fetch("/buscar/" + valor_busqueda, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => {
      return result.json(); //Regresa otra promesa
    })
    .then((data) => {
      //Modificamos el DOM de nuestra página de acuerdo a los datos de la segunda promesa

      let resultados = "";

      if (data.machines.length > 0) {
        resultados += `<div class="columns is-multiline">`;
        for (let machine of data.machines) {
          resultados += `<div class="column is-3">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="/uploads/${machine.imagen}"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="/uploads/${machine.imagen}"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${machine.nombre}</p>
                  <p class="subtitle is-6">
                    @${machine.marca} ${machine.tipo}
                  </p>
                </div>
              </div>

              <div class="content">
              ${machine.descripcion}
                <br />
              </div>
            </div>
          </div>
        </div>`;
        }
        resultados += `</div>`;
      } else {
        resultados += `<h1>No hay máquinas >:( </h1><br>`;
      }

      document.getElementById("resultados").innerHTML = resultados;
    })
    .catch((error) => {
      console.log(error);
    });
};
