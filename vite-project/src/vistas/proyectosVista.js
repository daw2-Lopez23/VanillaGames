export default {
    template:`

<div class="container">
                <h1 class="mt-5">Detalle del proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em;"></i>
                        Volver</bottom>
                </div>
                
                <div class="row mt-2">
                    <div class="col-12 col-md-4 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-12 col-md-8">
                        <p>
                            <p><strong>Nombre: </strong><span id="nombre">TETRIS</span></p>
                            <p><strong>Descripción: </strong><span id="nombre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
                            <p><strong>Estado: </strong><span id="nombre">Estado</span></p>
                            <p><strong>Fecha: </strong><span id="nombre">12/12/2023</span></p>
                            <p><strong>Enlace: </strong><span id="nombre">http://www.enlaceapp.com</span></p>
                            <p><strong>Repositorio: </strong><span id="nombre">carrebola.github.com/123456</span></p>
                        </p>
                    </div>
                </div>
                <div
                    class="container fixed-bottom d-flex justify-content-end"
                    style="padding: 0px 0px 100px 0px"
                >
                    <button
                        class="btn btn-success rounded-circle fs-3 shadow"
                        style="width: 50px"
                    >
                        <i class="bi bi-pencil"></i>
                    </button>
                </div>
                
            </div>`,
        script: (urlAvatar, urlInputAvatar, user_id) => {    
        const pintaTabla = (proyectos) => {
        let tbodyProyectos = ''
        // Para cada proyecto del array 'proyectos'
        proyectos.forEach(proyecto => {
        // sumamos un tr con los datos del proyecto
          tbodyProyectos += `
        <tr>
          <td>
            <div class="containerImagen">
              <img 
                width="200px" 
                src=${proyecto.imagen || 'images/imagenVacia.png'} 
                alt="imagen proyecto" />
            </div>
          </td>
          <td>${proyecto.nombre}</td>
          <td>${proyecto.descripcion}</td>
          <td><a href="${proyecto.enlace}"><i class="bi bi-link fs-4"></i></a></td>
          <td><a href="${proyecto.repositorio}"><i class="bi bi-folder-symlink fs-4"></i></a></td>
          <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
          <td>${proyecto.created_at}</td>
          <td>${proyecto.estado}</td>
          <td>
            <a
            data-user_id = ${proyecto.user_id}
            class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
            ></a>
          </td>
          <td>
            <a
              data-user_id = ${proyecto.user_id}
              class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
            ></a>
          </td>
        </tr>
              
        `
        })
        // inyectamos el resultado en el tbody
        document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
      }
      
      // Ejecutamos la función
      pintaTabla(proyectos)
}
}