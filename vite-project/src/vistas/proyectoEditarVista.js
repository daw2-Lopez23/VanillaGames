export default {
    template:`

<div class="container">
                <h1 class="mt-5">Edición de proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                        Volver</bottom
                    >
                </div>
                <form action="" class="">
                    <div class="row mt-2">
                        <div class="col-12 col-md-4 pt-2 mb-3">
                            <img src=".images/juego.jpg" alt="" class="img-fluid" />
                            <label class="form-label mt-2" for="urlImagen"
                                ><strong>URL imagen: </strong></label
                            >
                            <input
                                id="urlImagen"
                                type="text"
                                class="form-control"
                                value="http://enlaceImagen.com"
                            />
                        </div>
                        <div class="col-12 col-md-8">
                            <!-- Formulario nuevo proyecto -->

                            <!-- Nombre proyecto -->
                            <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                            <input
                                required
                                id="nombre"
                                type="text"
                                value="Nombre Autor"
                                class="form-control"
                            />

                            <!-- Descripción -->
                            <label class="form-label mt-2" for="descripcion"
                                ><strong>Descripción: </strong></label
                            >
                            <textarea id="descripcion" class="form-control" rows="4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
                            >

                            <!-- Estado -->
                            <label class="form-label mt-2" for="estado"
                                ><strong>Estado: </strong></label
                            >
                            <select required id="estado" class="form-control">
                                <option value="estado">estado</option>
                                <option value="otro estado">otro estado</option>
                            </select>

                            <!-- Fecha -->
                            <label class="form-label mt-2" for="fecha"
                                ><strong>Fecha: </strong></label
                            >
                            <input id="fecha" type="date" class="form-control" value="12/12/2023" />

                            <!-- Enlace al proyecto -->
                            <label class="form-label mt-2" for="enlace"
                                ><strong>Enlace: </strong></label
                            >
                            <input
                                id="enlace"
                                type="url"
                                class="form-control"
                                value="http://enlace.com"
                            />

                            <!-- Repositorio -->
                            <label class="form-label mt-2" for="repositorio"
                                ><strong>Repositorio: </strong></label
                            >
                            <input
                                id="repositorio"
                                type="text"
                                class="form-control"
                                value="user.github.com/123456"
                            />

                            <!-- Submit -->
                            <input
                                type="submit"
                                class="btn btn-success mt-3"
                                value="Subir proyecto"
                            />
                        </div>
                    </div>
                </form>
            </div>
            `
,
script: (id) => {
    // Simulamos la consulta a un proyecto por id
    const proyectoArray = proyectos.filter(p => p.id == id)
    const proyecto = proyectoArray[0]

    // Transformamos la fecha en un formato yy-mm-dd
    const fecha = proyecto.created_at
    const fechaCorta = fecha.split('T')[0]

    // Insertamos los datos en el formulario
    document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
    document.querySelector('#urlImagen').value = proyecto.imagen
    document.querySelector('#nombreJuego').value = proyecto.nombre
    document.querySelector('#descripcion').value = proyecto.descripcion
    document.querySelector('#estado').value = proyecto.estado
    document.querySelector('#fecha').value = fechaCorta
    console.log(fechaCorta)
    document.querySelector('#enlace').value = proyecto.enlace
    document.querySelector('#repositorio').value = proyecto.repositorio

    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Actualización de la imagen a partir de la urlImagen
    // Capturamos input
    const inputUrl = document.querySelector('#urlImagen')
    // Detectamos cambios en su value
    inputUrl.addEventListener('input', () => {
      const imagen = document.querySelector('#imagenJuego')
      // Actualizamos el atributo src y por lo tanto la imagen
      imagen.setAttribute('src', inputUrl.value)
    })

    // Validación BOOTSTRAP
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioEditarProyecto')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        //* ** ENVIAMOS DATOS A LA BASE DE DATOS */
        enviaDatos()
      }
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const proyectoEditado = {
        imagen: document.querySelector('#urlImagen').value,
        nombre: document.querySelector('#nombreJuego').value,
        descripcion: document.querySelector('#descripcion').value,
        estado: document.querySelector('#estado').value,
        enlace: document.querySelector('#enlace').value,
        repositorio: document.querySelector('#repositorio').value
      }
      alert(`Enviando a la base de datos el objeto con id = ${proyecto.id}`)
      console.log(`Enviando a la base de datos el objeto con id = ${proyecto.id}`, proyectoEditado)
    }
  }
}
            