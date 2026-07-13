

const caluladora =  require("../../models/calculadora.js");
test ('Soma de 2 + 2 deve ser igual a 4', () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test ('Soma de 5 + 100 deve ser igual a 105', () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test ('Soma de banana + 100 deve ser igual a error', () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe(Error);
});