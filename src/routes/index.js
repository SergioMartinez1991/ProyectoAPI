const routes = require ("express").Router();

routes.get('/', (req,res) => {
    res.send("Bienvenido a Nutricion Personal")
})

routes.use('/recetas', require('./nutriciones'));

module.exports = routes;
