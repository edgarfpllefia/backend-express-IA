import Bacalla from '../models/Bacalla.js';

export async function getAll(req, res) {
  try {
    const bacalla = await Bacalla.find();
    res.json(bacalla);
  } catch (error) {
    res.status(500).json({ error: 'Error obtenint les varietats' });
  }
}

export async function getById(req, res) {
  try {
    const item = await Bacalla.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: `Bacallà amb id ${req.params.id} no trobat` });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error obtenint el bacallà' });
  }
}

export async function create(req, res) {
  try {
    const { nom, origen, tipus, descripcio } = req.body;
    if (!nom || !origen || !tipus || !descripcio) {
      return res.status(400).json({ error: 'Falten camps obligatoris: nom, origen, tipus, descripcio' });
    }
    const nouBacalla = new Bacalla({ nom, origen, tipus, descripcio });
    await nouBacalla.save();
    res.status(201).json(nouBacalla);
  } catch (error) {
    res.status(500).json({ error: 'Error creant el bacallà' });
  }
}

// ── Versió array en memòria (Nivell 1 i 2) ────────────────────────────────
// import bacalla from '../data/bacalla.js';
//
// export function getAll(req, res) {
//   res.json(bacalla);
// }
//
// export function getById(req, res) {
//   const id = parseInt(req.params.id);
//   const item = bacalla.find(b => b.id === id);
//   if (!item) {
//     return res.status(404).json({ error: `Bacallà amb id ${id} no trobat` });
//   }
//   res.json(item);
// }
//
// export function create(req, res) {
//   const { nom, origen, tipus, descripcio } = req.body;
//   if (!nom || !origen || !tipus || !descripcio) {
//     return res.status(400).json({ error: 'Falten camps obligatoris: nom, origen, tipus, descripcio' });
//   }
//   const nouId = bacalla.length > 0 ? Math.max(...bacalla.map(b => b.id)) + 1 : 1;
//   const nouBacalla = { id: nouId, nom, origen, tipus, descripcio };
//   bacalla.push(nouBacalla);
//   res.status(201).json(nouBacalla);
// }
