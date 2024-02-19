import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { enrutador } from './componentes/enrutador'

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'
