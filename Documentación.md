## Escenario del proyecto
**Vanilla Games S.L.** es una empresa de desarrollo de **minijuegos para navegadores web**, creados con vanillaJS, es decir, desarrollados exclusivamente con **Javascript** como lenguaje de programación (sin frameworks)

En esta empresa trabajan 10 desarrolladores y, habitualmente, suelen tener a tres alumnos/as en prácticas, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en **proponer a cada uno de los miembros del equipo el desarrollo de un minijuego** que, al acabar, deberán compartir con el resto de sus compañeros. Estos, a su vez, deben comentar y valorar cada una de las propuestas. Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial, para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de google. Actualmente pretenden crear una aplicación web tipo intranet para llevar a cabo este propósito.

Como alumno en prácticas, **tu trabajo consiste en crear una aplicación web que permitirá a los desarrolladores de Vanilla Games, publicar sus propuestas de minijuegos**, de manera que el resto de compañeros podrá hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

# Requisitos del proyecto y casos de uso general
Los **casos de uso** son una técnica de modelado utilizada en el desarrollo de software para describir las interacciones entre un sistema y sus usuarios. En términos simples, los casos de uso describen cómo los usuarios interactúan con un sistema y qué resultados esperan obtener de él.

INFO
Los casos de uso son útiles para ...

# Casos de uso general
Esta aplicación web debe permitir a un usuario **registrarse** (con su nombre, apellidos, email y contraseña) y posteriormente **iniciar** y **cerrar sesión**. Un usuario registrado debe poder **ver un listado de proyectos** publicados por los desarrolladores. También podrá **editar su perfil** y **subir una imagen** de tipo avatar.

Si el usuario registrado tiene el perfil de **‘desarrollador’** , además, debe poder **publicar proyectos** con información del tipo: nombre de proyecto, una descripción, una imagen representativa y dos enlaces, el del proyecto desplegado en un servidor de pruebas y el del repositorio del código correspondiente, el estado del proyecto, etc. También debe poder **eliminar o editar sus proyectos**.

Por otro lado, el perfil desarrollador debería poder **realizar comentarios** de cada uno de los proyectos publicados y añadir una valoración en forma de estrellas.

Finalmente, habrá un administrador que podrá **adminstrar el perfil** de cada uno de los usuarios registrados en la plataforma (editar, borrar, etc) así como modificar el rol de cada uno de estos. También tendrá **control total sobre los comentarios y valoraciones**.

## Fases de desarrollo.

Necesitamos organizarnos un poco. Vamos a planificar como vamos a llevar a cabo las diferentes fases para cumplir con nuestros objetivos:

1. **Definición del proyecto y requisitos básicos:** En primer lugar debemos tener muy claro qué se espera de nuestra aplicación, por lo que anotaremos cada funcionalidad teniendo en cuanta los diferentes actores (roles de acceso). Esto es lo hemos hecho en el apartado anterior.
2. **Definición de las versiones:** Una vez conocemos los requisitos del proyecto, dividiremos el trabajo en diferentes versiones, de manera que todas ellas serán operativas, aunque cada una ampliando las funcionalidades.
3. **Planificación del proyecto:** Basandonos en la metodología Agile devidiremos todo el proceso en diferentes historias/tareas (para cada una de las versiones definidas) que: agruparemos, temporizaremos y representaremos mediante diagramas.
4. **Diseño de la interficie:** Basandonos en el diseño centrado en el usuario (DCU):
    i. Realizaremos un Benchmarking (para copiarnos de la competencia)
    ii. Crearemos un modelo de usuarios
    iii. Diseñaremos los prototipos de bajo nivel(bocetos, wireframes)
    iv. Diseñaremos el mockup (prototipo de alto nivel) junto a la guía   de estilos (usaremos la aplicación Figma)
    v. Haremos pruebas de usabilidad y rediseñaremos los prototipos.
5. **Programación del frontend (html/css/js):**Maquetaremos los prototipos (html/css) y diseñaremos la lógica de validación de cliente
6. **Programación del backend:** Utilizaremos un backend como servicio (SUPABASE) para:
Crear las bases de datos
Diseñar consultas sql y funciones postgres
Programaremos un ORM en javascript para el mapping de la bd.
7. **Integración de frontend y backend en la aplicación:**
Programaremos la SPA a partir de los prototipos
Programaremos la lógica de acceso a la bd empleando el ORM
Programaremos el resto de funcionalidades (sesiones y roles de acceso, etc)
8. **Analisis usabilidad II:** Haremos pruebas de usabilidad (test de usuarios) y solucionaremos los posibles conflictos detectados.
9. **Testing y despliegue en producción:**
    i. Diseñaremos un sistema de testing para crear tests unitarios
    ii. Configuraremos un entorno DevOps para trabajar con Integración continua y despliegue continuo (CI/CD)
    iii. Desplegaremos en producción cada una de las versiones.

## Versiones

Vamos a dividir el desarrollo del proyecto en diferentes versiones a partir de las funcionalidades que podrá realizar:

·VERSIÓN 1.0: Implementación de la publicación de proyectos
·VERSIÓN 2.0: Implementación de los comentarios de los proyectos
·VERSIÓN 3.0: Implementación del sistema de valoración mediante estrellas
·VERSIÓN 4.0: Implementación del sistema de valoración basado en rúbricas o criterios de valoración.

## Arquitectura y tecnologías

A la hora de decidir la arquitectura a implementar en el desarrollo de nuestro proyecto debemos tener en cuenta una serie de consideraciones previas, como la velocidad de carga inicial, el SEO, la experiencia de usuario, etc. pero también debemos considerar aspectos técnicos. Vamos a analizar primero algunas de las posibilidades que podemos elegir para la implementación de nuestro proyecto:


**¿Que arquitectura vamos a utilizar en nuestro proyecto?**
En nuestro caso nos basaremos en CSR, es decir, renderizamos todo el código html en el navegador. El cliente solo se encargará de responder a las peticiones devolviendo los datos solicitados (en formato json). De esta manera podemos dividir la implementación del proyecto en FRONTEND y BACKEND, separando cada funcionalidad y desarrollándola de manera independiente.

**¿Como diseñaremos nuestro FrontEnd ?**
**Diseño de la interficie**
En primer lugar, **para el diseño de la interficie**, crearemos los **bocetos** de nuestra aplicación (con papel y lapiz, como se ha hecho siempre).

Más tarde, éstos evolucionarán hacia el **Wireframe** (Diseño de alambres carente de estilo) que finalmente se convertirá en un **Mockup** (diseño con colores y tipografías definitivas). Para el diseño de este último y para implementación de la **guía de estilos** utilizaremos la herramienta FIGMA.

**Maquetación del frontend**
En primer lugar crearemos los prototipos utilizando **html5, css3** y el framework **Bootstrap 5**. Utilizaremos una plantilla **Bootswatch** que adaptaremos a nuestro diseño mediante **SASS**.

Una vez tenemos los prototipos html creados, los integraremos en la SPA e implementaremos la lógica de programación utilizando **VanillaJS** , es decir, con Javascript puro (ES6, sin usar frameworks)

Tranquilo, es normal que no hayas entendido nada aún... pero ten paciencia, porque todo esto se explica en el Módulo 9 - Diseño de interficies y en el Módulo 6 - Programación del lado del cliente (javascript).

**¿Como implementaremos las funcionalidades del BackEnd?**
**Usaremos SUPABASE como servicio de Backend**
En el lado del backend utilizaremos Supabase como servicio backend.

Este servicio nos permite almacenar la información en **bases de datos relacionales** en un entorno basado en **postgreSQL**.

También nos ofrece, entre otros::

Un sistema de **autenticación** basado en proveedores como google, github, etc.

Un sistema de control de accesos según roles a través de las **políticas de permisos**.

Un **storage** de almacenamiento de archivos (para las imágenes) en los buckets que nos permite configurar.

Una **API en javascript** para las peticiones más frecuentes que atacan a las tablas de la bd (CRUD) así como un sistema de **funciones personalizadas** (con sus correspondiente api en js) para hacer consultas específicas (por ejemplo, consultas multitabla)

Nos va a tocar desenpolvar nuestros conocimientos de SQL y Posgree que aprendimos en el Módulo 4 - Base de datos... pero tranquilo, iremos iremos refrescando la memória mientras explicamos el resto de conceptos.

**Nuestro entorno de desarrollo: VSCODE**
En el entorno de desarrollo tendremos a **VSCode** trabajando sobre **Nodejs** y su gestor de paquetes **npm**.

Configuraremos el IDE con los **plugins** necesarios para facilitar un buen flujo de trabajo.

Formatearemos el código siguiendo el estándar **'Standard'** mediante herramientas de verificación de código como **'Eslint'**.

Para el control de versiones trabajaremos con un repositorio **Git** que sincronizaremos con una cuenta de **Github**.

En el proceso de desarrollo emplearemos el flujo de trabajo **‘Flujo de rama de funcionalidad’**. Es decir, crearemos ramas específicas para cada funcionalidad que integraremos en la rama principal una vez testadas las funcionalidades. Así, nuestro repositorio reflejará todo el proceso de trabajo, las diferentes versiones, etc.



**Requesitos y diagrama de casos de uso**
En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

**Por lo tanto, vamos a comenzar por la versión 1.0.**

Lo primero es definir los **casos de uso para esta versión**. Una primera aproximación podría ser la siguiente:

RECUERDA QUE...
Los casos de uso son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.

**Casos de uso para la V1.0 - Definición básica**

**Registrar usuario:** Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
**Recuperar contraseña:** Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
**Iniciar sesión:** Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
**Editar perfil:** Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
**Ver proyectos:** Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
**Publicar proyecto:** Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
**Editar proyecto:** Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
**Eliminar proyecto:** Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
**Ver/Editar usuarios:** Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
**Eliminar usuario:** Un administrador puede eliminar cualquier usuario registrado en la plataforma.

**Diagrma de casos de uso para la versión 1.0**

![Casos de uso](diagramaCasosUso.png)


**Casos de uso específicos y diagramas de flujo.**
En el primer apartado 'Requisitos y diagrama de **casos de uso**' para esta versión 1.0, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un **diagrama de casos de uso**.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

**Casos de uso específicos**
1. Registrar usuario
**Actores:** Usuario no registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de registro.
2. El usuario introduce su nombre, apellidos, email y contraseña.
3. El sistema valida que los campos estén completos y que el email no esté 4registrado previamente.
4. El sistema crea un nuevo usuario con los datos proporcionados.
5. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

**Flujos alternativos:**

3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

2. **Recuperar contraseña**
**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de registro.
2. El usuario selecciona la opción 'Recuperar contraseña'
3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
4. El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.

**Flujos alternativos:**

3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.

3. **Iniciar sesión**
**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de inicio de sesión.
2. El usuario introduce su email y contraseña.
3. El sistema valida las credenciales y crea una sesión para el usuario.
4. El sistema redirige al usuario a la página principal de la aplicación.

**Flujos alternativos:**

3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

4. **Cerrar sesión**
**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

El usuario hace clic en el botón de "cerrar sesión".
El sistema cierra la sesión del usuario.
El sistema redirige al usuario a la página de inicio.

4. **Ver/Editar perfil**
**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de edición de perfil.
2. El usuario edita su nombre, apellidos y contraseña.
3. El sistema valida los campos y actualiza el perfil del usuario.
4. El sistema muestra un mensaje de confirmación.

**Flujos alternativos:**

3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

5. **Ver proyectos**
**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de proyectos.
2. El sistema muestra una lista de proyectos publicados por desarrolladores.
3. El usuario puede hacer clic en un proyecto para ver más detalles.
4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador

6. Publicar proyecto
**Actores:** Usuario registrado con perfil de desarrollador.

**Precondiciones:** El usuario ha iniciado sesión y su perfil es de desarrollador.

**Flujo básico:**

1. El usuario navega a la página de publicación de proyecto.
2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
3. El sistema valida los campos y crea un nuevo proyecto.
4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

**Flujos alternativos:**

2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
El sistema descarta la información ingresada en el formulario.
El sistema muestra un mensaje de confirmación al desarrollador.

7. Editar proyecto:
**Actor principal:** Desarrollador

**Objetivo:** Editar la información de un proyecto previamente creado.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

1. El usuario selecciona la opción de "Editar proyecto".
2. El sistema muestra la lista de proyectos previamente creados por el usuario.
3. El usuario selecciona el proyecto que desea editar.
4. El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
5. El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
6. El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

8. Eliminar proyecto:
**Actor principal:** Desarrollador

**Objetivo:** Eliminar un proyecto previamente creado.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

1. El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
2. El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
3. El usuario confirma que desea eliminar el proyecto.
4. El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
5. El sistema actualiza la información de proyectos.

9. **Ver/Editar usuario:**
**Actor principal:** Usuario administrador

**Objetivo:** Editar la información de los usuarios registrados.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

**Flujo principal:**

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
3. El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
4. El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
5. El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.


9. **Eliminar usuario:**
**Actor principal:** Usuario administrador

**Objetivo:** Eliminar usuario del sistema.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

**Flujo principal:**

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
3. El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
4. El sistema informa de que se eliminarán todos sus registros.
5. El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

**Errores**
Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

**Error de conexión:** El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. **El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos** y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

**Error de validación:** Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, **el sistema debería mostrar un mensaje de error indicando el problema específico**, como "El campo de correo electrónico debe ser una dirección de correo válida".

**Error de autenticación:** Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, **el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada** y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

**Error de autorización:** Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, **el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada** y ofrecer la posibilidad de volver a la página anterior.

**Error de servidor:** En caso de que se produzca un error interno en el servidor, como una excepción no controlada, **el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error** y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.


## Hist5 - Entorno de desarrollo
# Comenzamos el SPRINT 2 - PROTOTIPOS

Comenzamos el sprint 2 que incluye tres historias: La configuración del entorno de desarrollo, la maquetación de los bocetos y la implementación de la validación de los formularios. 

![Kanbas](kanbas.png)

“Dame seis horas para cortar un árbol y pasaré las primeras cuatro afilando el hacha.” – Abraham Lincoln

Si queremos ser eficientes en la creación de aplicaciones web, lo mejor es empezar por configurar bien nuestro entorno de desarrollo. Para ello vamos a instalar/configurar las siguientes herramientas:

1. Un buen software para escribir nuestro código. En nuestro caso usaremmos el programa VSCode de Microsoft.
2. Instalación del software para el control de versiónes. Nosotros instalaremos GIT.
3. Una aplicación web para sincronizar nuestro repositorio en la nube. En nuestro caso será GitHub.

## 1. VSCode

Sin duda, en le momento de escribir esta documentación, el rey de los IDs es, sin duda, Visual Studio Code (VSCode).

![Visual Studio](VisualStudio.png)

Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondré información ampliada ya que es un tema muy trillado en internet:

# 1.1. Descarga e instala VSCode
Puedes encontrar la versión oficial de vscode aquí

# 1.2. Elige el tema que más te guste.
Puedes tunear tu VSCode instalando diferentes temas. Para ello:

- Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar.
- Haz clic en instalar extensión.
- Desde el icono de configuración de vscode (la tuerquecita de abajo a la izquierda) selecciona **'Temas > Tema de color'**
- Selecciona el tema que has instalado y... ¡ya lo tienes!

## 1.3. Instala un tema de iconos, por ejemplo VSCode Icons o Material Icon

Para instalar los iconos el proceso es el mismo:

- Desde el buscador de extensiones escribe el nombre del tema de iconos
- En configuración, selecciona **'Tema > Tema de icono de archivo'** y busca el tema instalado.
- Ahora verás que en la columna de la izquierda, cada archivo tiene un icono diferente en función de su extensión: html, css, etc.

## 1.4. Extensiones
Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo.

# Prettier

Una de las extensiones que te recomiendo sí o sí es **'Prettier'**. Esta extensión se va a encargar de formatear tu código HTML y CSS port tí, respetando las identaciones. El proceso para instalar esta extensión es muy simple, solo tienes que buscar la extensión en el buscador y darle a instalar.

# Live Server

Otra extensión imprescindible para nosotros es **Live Server**. Mediante esta extensión podremos tener un servidor virtual que mostrará el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se irá actualizando conforme vamos modificando el código.

Existen infinidad de extensiones para VSCode Aquí puedes ver un ejemplo de mi entorno. Utilizo el tema **Night Owl** y los iconos de **VSCode Icons**. Fijate que el código html está formateado con **Prettier**

![Index](Index.png)

De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. Más adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudarán a programar de forma más eficiente.

## 2. Control de versiones - Git

Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qué es Git, pero deja que te refresque algunas ideas importantes:

INFO
✔ Git es como un superpoderoso control de versiones para tu código. Imagina que estás escribiendo un ensayo importante y cada vez que haces cambios guardas una nueva versión en diferentes archivos, como "ensayo_v1", "ensayo_v2" y así sucesivamente. Git hace algo similar pero para tu código.

✔ Con Git, puedes guardar diferentes versiones de tu proyecto a medida que avanzas. Esto significa que si cometes un error o quieres volver a una versión anterior, ¡es pan comido! Git te permite viajar en el tiempo y regresar a cualquier punto en la historia de tu proyecto.

✔ Pero eso no es todo. Git también es excelente para trabajar en equipo. Puedes colaborar con otros programadores sin pisar los pies de nadie. Cada persona puede trabajar en su propia versión del proyecto y luego combinar los cambios de todos de manera ordenada.

✔ Además, Git hace que compartir tu código sea súper fácil. Puedes subir tu proyecto a un repositorio en línea (como GitHub o GitLab) y otras personas pueden descargarlo y contribuir. Incluso puedes colaborar con desarrolladores de todo el mundo en proyectos de código abierto.

Aprender git es muy importante para un desarrollador web. Por suerte lo vas a estudiar (si no lo has hecho ya) en el ciclo de DAW. De todas formas te dejo un enlace con más información que te será muy util para entender conceptos como que es una rama, como subir ramas al repositorio, clonarlas, sincronizarlas etc:

👉Hello Git & GitHub👈

Vamos a instalar (si aun no está instalado) Git. Para ello:

1. Descarga su última versión de la web oficial: Download Git.

2. Instala en tu ordenador el software.

3. Configura git para tu usuario:

- Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

Sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema

INFO
✔️ Tienes más información de cómo configurar Git aquí:

👉Configurando Git por primera vez👈

✔️ Si quieres aprender más sobre git también puedes consultar este recurso de Obdulia Montiel:

👉La guía para principiantes de Git y Github👈

## 3. Repositorio en linea - Github
Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube.

¿QUÉ ES Y PARA QUE SIRVE GITHUB?
✔️ GitHub es una especie de red social para programadores. Es un lugar en línea donde los desarrolladores pueden **compartir y trabajar en proyectos de software**.

✔️ Funciona como un **repositorio** donde se guarda el código de **diferentes versiones** de un proyecto. Permite la **colaboración entre programadores**, quienes pueden ver y sugerir cambios en el código.

✔️ Es una herramienta muy popular y útil en la comunidad de **desarrollo de software**.


1. En primer lugar vamos a acceder github.com
2. Crea una cuenta e inicia sesión.
3. Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.


## Configurando entorno y subiendo página de pruebas

Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para después crear una página web, guardar una versión en git, subirla a github y publicarla en github pages. Vamos a por ello:

1. Instala VSCode si no la has hecho aún.

2. Configúralo con el tema que más te guste, los iconos que decidas e instala las extensiones live server y prettier.

3. Crea una carpeta en tu ordenador con nombre pruebas

4. Abre VSCode y arrastra la carpeta dentro de la ventana central.

5. Crea un archivo con nombre index.html (algo básico, con un h1 y poco más).

6. Muestra el resultado en el navegador utilizando live server.

7. Configura prettier para que al guardar con ctrl + S se aplique formateado de tu código. Pruebalo.

8. Instala Git si no lo has hecho aún.

9. Configura tu usuario o confirma que ya está configurado.

10. Haz clic en el icono de 'Control de fuente' de tu vscode o pulsa ctrl + Mayus + G

11. Aparecerá un mensaje que te indica que no tienes repositorio creado, y te dará la opción de crearlo desde aquí. Hazlo

![conf1](Conf1.png)

![conf2](Conf2.png)

12. Escribe un mensaje de inicio de repositorio (por ejemplo 'primer commit de git') y dale a confirmar.

13. Ahora te pedirá si quieres publicar la rama ('Branch'). Dile que sí. Al hacer clic te preguntará qué nombre quieres para el repositorio y si quieres que sea privado o público. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea público.

14. Si es la primera vez que conectas tu VSCode con github te pedirá que lo sincronices. Utiliza la opción de confirmar a través de VSCode.

15. Una vez publicado tu archivo en github podrás ver, en tu página de github (por ejemplo carrebola.github.com), algo así:

![conf3](Conf3.png)

**¿CÓMO UTILIZAR GIT DESDE VISUAL STUDIO CODE?**

Aquí te dejo un enlace a un artículo de donde nos explica como trabajar con git y github desde VSCode:

👉¿Cómo utilizar Git desde Visual Studio Code?👈

1. Vamos a documentar de forma básica nuestro proyecto prueba. Para ello vamos ahora a crear un archivo readme.md para que github muestre información del proyecto publicado en su pantalla inicial:

- Crea un archivo con nombre **readme.md** en la raiz de la carpeta del proyecto.
- Escribe dentro un texto descriptivo del proyecto, como por ejemplo:

# Configurando nuestro entorno de desarrollo

1. Instalación de VSCode
2. Configurarción de git y github
3. Pruebas con proyecto

Si abrimos ahora github podemos ver como se muestra esta información en la portada del repositorio de github.

![conf4](Conf4.png)

TIP
Fíjate que el # equivale a un <h1></h1> y que la numeración se comporta como una lista ordenada <ol></ol>. Este tipo de lenguaje se llama **Markdown**.

APRENDE MARKDOWN
Si quieres saber más de este sencillo y potente lenguaje aquí tienes más información:

👉 MARKDOWN👈

14. Para terminar vamos a subir nuestro proyecto a github pages. Para ello:
- Haz clic en Settings (el icono con forma de engranaje de la parte superior)
- Entra en Pages (opción que encontrarás en el menú lateral izquierdo)
- Donde pone Branch selecciona la rama main y haz clic en Save.
- Si todo ha ido bien, la página se está publicando... Espera un minuto y refresca la página con F5
- Ahora puedes ver la url donde se ha publicado tu página. Haz clic en el enlace o en el botón Visit site y podrás ver la web publicada.


![conf5](Conf5.png)


INFO
**GitHub Pages** es como un servidor web estático gratuito para que los desarrolladores **muestren su trabajo al mundo**. Básicamente, puedes tomar tus proyectos de GitHub y convertirlos en páginas web públicas para que cualquiera las vea.

Y hasta aquí la configuración de nuestro entorno de desarrollo, al menos la versión básica. Más adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya **estamos preparados para crear los prototipos en html y css** de la primera versión de nuestro proyecto.

## ¡¡¡ Comienza el juego !!!

Ahora que tenemos el hacha afilado, es el momento de comenzar a escribir el primer código de nuestro proyecto. Pero antes vamos a crear un proyecto nuevo en VSCode, a continuación crearemos un repositorio y lo vincularemos con github. Después crearemos una rama exclusiva para el diseño de los prototipos en html/css. Y ya estaremos listos para comenzar a picar código. Vamos a ello:

# Creando la rama principal

1. Crea en tu carpeta de proyectos una carpeta con nombre vanillagames10

2. Abre VSCode y arrástrala a la parte central de tu IDE

DANGER
Asegúrate de que has arrastrado la carpeta a la **ventana central** de VSCode. Si la arrastras a la columna de la izquierda tendrás varios proyectos abiertos a la vez, y podrías tener problemas cuando trabajes con tu repositorio. Yo te recomiendo que cada ventana de VSCode contenga tan solo un proyecto único.

3. Crea un repositorio para el proyecto.

4. Crea el primer commit con el mensaje 'Commit principal'

5. Publica la rama con el mensaje 'Rama principal'

6. Publica el repositorio como privado

7. Ahora tienes un proyecto con una única rama, cuyo nombre por defecto es main. Vamos a crear un archivo readme.md para esta rama. Escribe en él el título 'Vanilla Games' junto a un párrafo con la descripción del proyecto: 'Vanilla Games es el nombre que recibe el proyecto que vamos a desarrollar en esta documentación. Es un proyecto sencillo, en las versiones iniciales, que se irá complicando a medida que vayamos trabajando en él.'.

8. Crea un segundo commit con el texto 'Creamos archivo readme.md para rama principal'. A continuación sincroniza los cambios con github.

9. Abre ahora la página de github y comprueba que:

i. El proyecto se ha creado y subido con éxito en la rama main.
ii. Se muestra la información del archivo readme.md en la página principal.
iii. Se muestra el mensaje del commit que has hecho.

![conf6](Conf6.png)

# Creando la rama prototipos
Vamos a crear una rama exclusiva para el diseño de los prototipos y a subirla a github. Sigue los siguientes pasos:

1. Crea una rama nueva con nombre prototipos. Para ello haz clic en el nombre de la rama actual 'main' que verás en la parta inferior izquierda de VSCode.

2. Selecciona Crear rama...

3. Vamos a ponerle el nombre 'prototipos'

4. Fijate que ahora en la parte inferior izquierda aparece el nombre de la rama actual en la que estás trabajando.

5. Crea una carpeta en la raiz con nombre prototipos.

6. Ahora vamos a crear el archivo home.html (de momento pon un h1 con el título y poco más)

![conf7](Conf7.png)

7. Y hacemos un commit con el texto 'Prueba prototipo home'. Te pedirá si quieres publicar la rama, dile que sí y haz push (sincronziar con github).

8. Fíjate que ahora en github tienes las dos ramas, la rama mainy la rama prototipos. En la rama main solo tienes el archivo readme.md pero en la rama prototipos ahora ya tienes la carpeta prototiposcon el archivo home.html. Es decir, ahora tienes un repositorio de tu proyecto pero con diferentes ramas que, por el momento, serán completamente independientes.

![conf8](Conf8.png)

9. Ya para acabar, puede ser interesante crear un archivo readme.md dentro de la carpeta prototipos. Hazlo y sube los cambios a github

![conf9](Conf9.png)

## Comenzamos a maquetar con Bootstrap

# Frameworks como marco de trabajo en Javascript

No nos engañemos. En la mayoría de empresas de desarrollo web hacen trampas. Son pocas las que crean aplicaciones con html, css y javascript puro. La mayoría utilizar librerías que nos facilitan el trabajo. Es más, la casi todos os desarrolladores trabajan con lo que conocemos como frameworks.

¿Qué es un framework para el desarrollo de apps en javascript?
Algunos ejemplos de frameworks frontend populares incluyen:

- React,
- Angular,
- Vue.js y
- Svelte.

Estos frameworks pueden ahorrar tiempo a los desarrolladores al proporcionar una base sólida sobre la cual construir, evitando la necesidad de comenzar desde cero y permitiendo enfocarse en la lógica y la experiencia del usuario en lugar de en detalles técnicos repetitivos.

Características de los frameworks más populares

NOTE
En este proyecto nosotros no vamos a utilizar ninguno de estros frameworks, ya que uno de los objetivos de esta documentación es poner en práctica los conocimientos adquiridos durante el ciclo, principalmente Javascript, que en definitiva es la base de todos estos marcos de trabajo.


# Frameworks para la maquetación html/css

Ahora bien, para la maquetación sí que vamos a utilizar un poco de ayuda 😅.

Los frameworks de diseño o bibliotecas proporcionan estilos predefinidos y componentes reutilizables para ayudarte a construir interfaces de usuario más rápidamente.

Los más populares en son:

- Bootstrap
- Tailwind CSS

# Bootstrap:

Bootstrap es uno de los frameworks de diseño más populares. Proporciona una amplia gama de componentes y estilos predefinidos basados en HTML, CSS y JavaScript. Es altamente personalizable y es ideal para crear sitios web responsivos y modernos.

# Tailwind CSS:

Tailwind CSS es un framework que se diferencia por su enfoque de "clases utilitarias". En lugar de proporcionar componentes predefinidos, Tailwind CSS ofrece una amplia gama de clases CSS que permiten construir diseños personalizados de manera eficiente.

Pero no son los únicos.

Ejemplos de los frameworks más populares para la maquetación con html/css

Estos frameworks de diseño y bibliotecas pueden ser muy útiles para agilizar el proceso de desarrollo frontend al proporcionar estilos coherentes y componentes reutilizables. La elección del framework dependerá de tus preferencias de diseño, las necesidades de tu proyecto y cómo se adapte a tu flujo de trabajo.

BOOTSTRAP
Para nuestro proyecto nosotros utilizaremos **Bootstrap**, ya que, de momento, es el más utilizado en las empresas de desarrollo (al menos en el momento de escribir esta guía).

👉 Aquí tienes la web oficial de la última versión de Bootstrap: https://getbootstrap.com/

👉 Y aquí tienes un enlace a la documentación de Booststrap 5 en español: https://getbootstrap.esdocu.com/, de la mano de 'esdocu'

## ¡Maquetando prototipos!

Es el momento de ponernos manos a la obra. Ya tenemos preparado nuestro entorno de trabajo con VSCode instalado y algunos plugins como Prettier para formatear nuestro código. También hemos instalado Git y hemos creado una cuenta de github. Y hemos creado un proyecto el cual tenemos vinculado con nuestra cuenta de github.

Es el momento de volver al VSCode, situarnos en la rama prototipos... y ¡¡¡comenzar a picar código!!! 😎


## Home
# HOME Versíón escritorio

![HomeD](HomeD.png)

# HOME Versíón móvil

![HomeM](HomeM.png)

## Entorno de desarrollo

Vamos a comenzar a maquetar los prototipos para nuestro proyecto.

En primer lugar abre el VSCode y arrastra tu carpeta del proyecto. Si no recuerdo mal, se llamaba vanillagames10

Ahora deberías ver en la parte inferior izquierda de vscode el **nombre de la rama en la que estás situado**. Deberías estar en la rama prototipos, si no es así, puedes cambiar de rama haciendo clic (con el botón izquierdo) sobre el nombre de la rama.

¡CUIDADO!
Un error muy habitual es **olvidarnos de cambiar de rama** cuando comenzamos a trabajar. Ten cuidado ya que esto se puede convertir en un problema grave de organización, y podría ¡¡¡generar muchos dolores de cabeza 🥴!!!

Si todo es correcto deberías ver en la columna izquierda la carpeta prototipos con un archivo home.html y un archivo readme.md.

Abre el archivo home.html y comencemos a trabajar...

## Procedimiento

Comenzamos a maquetar la página home. De manera resumida debemos seguir los siguientes pasos:

1. Creamos plantilla html
    i. Modificamos lang y title
    ii. Vinculamos la libreria css para bootstrap y bootswatch
    iii. Vinculamos la librería de iconos de boostrap
    iv. Vinculamos el js de bootstrap.

2. Creamos la estructura de la web dentro del body con las etiquetas header, main y footer
3. Copiamos el componente menú de la documentación de bootstrap (navbar) y lo modificamos para que se ajuste a nuestro prototipo. Lo usamos tanto en el header como en el footer.
4. Creamos, en el main, un h1 y una imagen.


¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página HOME:

    Agrega el esqueleto HTML y los estilos iniciales para la página home.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈

## Registro
# REGISTRO Versíón escritorio

![RegistroD](RegistroD.png)

# REGISTRO Versíón móvil

![RegistroM](RegistroM.png)

# Procedimiento

Para maquetar la página registro.html podemos partir de la página home.html haciendo una copia y modificando la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

1. Modificamos la página home eliminando el botón registro del menú y el contenido de la etiqueta main excepto el h1 que modificaremos.

2. Cremos un div con una anchura máxima usando el atributo style y dentro creamos un formulario con los campos correspondientes.

¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈

## Login
# LOGIN Versíón escritorio

![LoginD](LoginD.png)

# LOGIN Versíón móvil

![LoginM](LoginM.png)



## Procedimiento

Para maquetar la página login.html podemos partir de la página registro.html haciendo una copia y modificando la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

Modificamos la página home eliminando el botón login del menú y el contenido de la etiqueta main excepto el h1 que modificaremos.
Creamos un div con una anchura máxima de 400px usando el atributo style y dentro creamos un formulario con los campos correspondientes.
Finalmente añadimos un enlace para actualizar la contraseña y un botón para registrarte si no lo estás.
¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈


## Editar perfil
# EDITAR PERFIL (MENÚ)

![EditarPerfilD](EditarPerfilD.png)

# EDITAR PERFIL (Ventana MODAL)

![EditarPerfilM](EditarPerfilM.png)

# Procedimiento

Para maquetar la página editPerfil.html podemos partir de la página home.html.

En este caso lo que nos interesa es modificar el componente **navbar del header**. Fíjate que ahora el usuario ya está registrado, por lo que puede acceder a los datos de su perfil y modificarlos.

Por otro lado, cuando un usuario está registrado, aparece un nuevo menú en la parte superior derecha (con el item PROYECTOS), éste es **el menú ROL**. También debemos añadir el **menú usuario**, el cual desplegará las opciones para **editar perfil**, cerrar sesión, etc.

De manera resumida debemos seguir los siguientes pasos:

1. Insertamos el componente modal al final del header.
2. Añadimos un botón para abrir ese modal (esto podemos hacerlo en el main, aunque es un código que después desecharemos)
3. En el componente navbar del header
    i. Añadimos el **menú ROL** con el item PROYECTOS
    ii. Añadimos el **menú USUARIO** con el item **Editar perfil**(entre otros). Este item será una copia del botón que permite abrir el modal.


¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈


## Proyectos
# PROYECTOS Versíón escritorio

![ProyectosD](ProyectosD.png)

# MIS PROYECTOS Versíón escritorio con tabla

![ProyectosDT](ProyectosDT.png)

# MIS PROYECTOS Versíón adaptable I con tarjetas

![ProyectosM](ProyectosM.png)

# MIS PROYECTOS Versíón adaptable II con tarjetas

![ProyectosMT](ProyectosMT.png)

# PROYECTOS Versíón móvil

![ProyectosMM](ProyectosMM.png)


## Procedimiento
Para maquetar la página proyectos.html podemos partir de la página registro. Esta vez habrá que modificar el menú y la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

1. Actualizamos el menu navbar
2. Creamos la estructura de filas y columnas (row y col) necesaria para poder utilizar el componente nav-taps.
3. Insertamos los componentes button y el input copiandolos de la documentación de bootstrap.
4. Creamos un div con una tabla con las columnas y filas correspondientes
5. Creamos un div con las tarjetas card correspondientes
6. Creamos las versiones responsive para la vista de tarjetas.


¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈



## Detalle proyecto
# DETALLE DEL PROYECTO Versíón escritorio

![DetalleD](DetalleD.png)

# DETALLE DEL PROYECTO Versión móvil

![DetalleM](DetalleM.png)


# Procedimiento

Para maquetar la página detalleProyecto.html podemos partir de la página editPerfil.html.

De manera resumida debemos seguir los siguientes pasos:

1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón Volver
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el texto en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.
6. Insertaremos un botón en la parte inferior derecha con posicionamiento absoluto


¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈


## Nuevo proyecto y Editar proyecto
# NUEVO PROYECTO Versíón escritorio

![NuevoProyectoD](NuevoProyectoD.png)

# EDITAR PROYECTO Versíón escritorio

![EditarProyectoD](EditarProyectoD.png)

# NUEVO PROYECTO Versíón móvil

![NuevoProyectoM](NuevoProyectoM.png)

# EDITAR PROYECTO Versíón móvil

![EditarProyectoM](EditarProyectoM.png)


# Procedimiento

Para maquetar la página nuevoProyecto.html podemos partir de la página detalleProyecto.html.

De manera resumida debemos seguir los siguientes pasos:

1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón Volver
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el formulario con sus campos en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.

Para maquetar la página editProyecto.html partiremos de la página nuevoProyecto.html y tan solo añadiremos el campo de la url de la imagen y cambiaremos título y botón 'Atualizar'

¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈


## Admin Usuarios y Admin Proyectos
# ADMIN (Proyectos) Versíón escritorio

![AdminProD](AdminProD.png)

# ADMIN (Usuarios) Versíón escritorio

![AdminUsuD](AdminUsuD.png)



# Procedimiento

Para maquetar la página adminProyectos.html podemos partir de la página Proyectos.html pero utilizando el menú superior de un usuario registrado.

Para maquetar la página adminUsuarios.html podemos partir de la página adminProyectos.html insertando en las celdas de la tabla los inputs necesarios.

¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

    Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉Buenas prácticas creando mensajes 'commit'👈