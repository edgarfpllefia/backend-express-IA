import bacalla from '../data/bacalla.js';

export function getAll() {
  return bacalla;
}

export function getById(id) {
  return bacalla.find(b => b.id === id);
}

export function create(dades) {
  const nouId = bacalla.length > 0 ? Math.max(...bacalla.map(b => b.id)) + 1 : 1;
  const nouBacalla = { id: nouId, ...dades };
  bacalla.push(nouBacalla);
  return nouBacalla;
}
