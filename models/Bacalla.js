import mongoose from 'mongoose';

const bacallaSchema = new mongoose.Schema({
  nom:       { type: String, required: true },
  origen:    { type: String, required: true },
  tipus:     { type: String, required: true },
  descripcio:{ type: String, required: true },
});

const Bacalla = mongoose.model('Bacalla', bacallaSchema);

export default Bacalla;
