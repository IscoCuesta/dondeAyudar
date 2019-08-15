const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  necesidad: { type: Array, required: true },
  resumen: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicial: { type: Date, required: true },
  fechaFinal: { type: Date, required: true },
  lugar: { type: String, required: true },
  link: { type: String, required: true },
  imagen: { type: String, required: false },
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization"
  }
}, { timestamps: {} });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
