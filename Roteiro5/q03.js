const obj1 = { a: 2, b: 6, c: 10, d: 20 };
const obj2 = { e: 15, f: 80, g: 12 };

const combinaObjetos = (a, b, callback) => callback({ ...a, ...b });

combinaObjetos(obj1, obj2, (resultado) => console.log(resultado));
