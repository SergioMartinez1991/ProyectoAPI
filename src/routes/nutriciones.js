
const routerReceta = require ('express').Router();

const {
    obtenerReceta,
    crearReceta,
    eliminarReceta,
    modificarReceta
} = require ('../controllers/nutriciones');

routerReceta.get('/', obtenerReceta)
routerReceta.post('/', crearReceta)
routerReceta.put('/:nombre', modificarReceta)
routerReceta.delete('/', eliminarReceta)

module.exports = routerReceta;



