const Dieta = require('../modules/Nutricion')


//CREATE
function crearReceta(req, res) {
    const info = req.body;
    const prod = new Dieta(info)
    prod.save()
        .then(data => res.send(data))
}

//READ
function obtenerReceta(req, res) {
    Dieta.find()
        .then(data => { res.status(200).send(data); })
}
//UPDATE
function modificarReceta(req, res) {
    const name = req.params.nombre
    const nuevaInfo = req.body;

    Dieta.findOne({ nombre: name })
        .then(dieta => {
            for (const key in nuevaInfo) {
                dieta[key] = nuevaInfo[key];
            }
            dieta.save()
                .then(data => {res.status(200).send(data);
                })
        })
}


// DELETE
function eliminarReceta(req, res) {
    const name = req.body.nombre;
    Dieta.findOneAndDelete({ nombre: name })
        .then(data => res.send(data))
        .catch(err => res.status(500).send(err))
}

module.exports = {
    obtenerReceta,
    crearReceta,
    eliminarReceta,
    modificarReceta
}