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

export async function update(req, res) {
  try {
    const { nom, origen, tipus, descripcio } = req.body;
    if (!nom || !origen || !tipus || !descripcio) {
      return res.status(400).json({ error: 'Falten camps obligatoris: nom, origen, tipus, descripcio' });
    }
    const item = await Bacalla.findByIdAndUpdate(
      req.params.id,
      { nom, origen, tipus, descripcio },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ error: `Bacallà amb id ${req.params.id} no trobat` });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error actualitzant el bacallà' });
  }
}

export async function remove(req, res) {
  try {
    const item = await Bacalla.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: `Bacallà amb id ${req.params.id} no trobat` });
    }
    res.json({ message: 'Bacallà eliminat correctament' });
  } catch (error) {
    res.status(500).json({ error: 'Error eliminant el bacallà' });
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
//
// export function update(req, res) {
//   const id = parseInt(req.params.id);
//   const index = bacalla.findIndex(b => b.id === id);
//   if (index === -1) {
//     return res.status(404).json({ error: `Bacallà amb id ${id} no trobat` });
//   }
//   const { nom, origen, tipus, descripcio } = req.body;
//   if (!nom || !origen || !tipus || !descripcio) {
//     return res.status(400).json({ error: 'Falten camps obligatoris: nom, origen, tipus, descripcio' });
//   }
//   bacalla[index] = { id, nom, origen, tipus, descripcio };
//   res.json(bacalla[index]);
// }
//
// export function remove(req, res) {
//   const id = parseInt(req.params.id);
//   const index = bacalla.findIndex(b => b.id === id);
//   if (index === -1) {
//     return res.status(404).json({ error: `Bacallà amb id ${id} no trobat` });
//   }
//   bacalla.splice(index, 1);
//   res.json({ message: 'Bacallà eliminat correctament' });
// }
