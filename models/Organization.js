const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  mision: { type: String, required: true },
  vision: { type: String, required: true },
  objetivo: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: Number, required: true },
  paginaweb: { type: String, required: true },
  direccion: { type: String, required: true },
  logo: { type: String, required: true },
  portada: { type: String, required: true },
  necesidades: { type: String, required: true }
});

const Organization = mongoose.model("Organization", OrganizationSchema);

module.exports = Organization;
