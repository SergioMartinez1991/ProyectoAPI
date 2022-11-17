const mongoose = require ("mongoose");

const DietaSchema = mongoose.Schema({
  nombre:{type:String, unique:"true"} ,
  edad: Number,
  sexo: String,
  correo: String
  
},{
  collection: "Cliente",
  timestamps: true
})

const Recetas = mongoose.model("Cliente", DietaSchema);


module.exports = Recetas