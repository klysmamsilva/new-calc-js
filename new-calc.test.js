const calc = require('./new-calc');
test('Soma 1 e 2 espera 3', () => {
    expect(calc.soma(1, 2)).toBe(3);
});
const soma = require('./new-calc');
test('Soma 2 e 2 espera 4', () => {
    expect(calc.soma(2, 2)).toBe(4);
});
const soma1 = require('./new-calc');
test('Soma -1 e -2 espera -3', () => {
    expect(calc.soma(-1, -2)).toBe(-3);
});
const soma2 = require('./new-calc');
test('Soma -1 e 2 espera 1', () => {
    expect(calc.soma(-1, 2)).toBe(1);
});
const soma3 = require('./new-calc');
test('Soma 5 e 0 espera 5', () => {
    expect(calc.soma(5, 0)).toBe(5);
});
//Essa soma4 é para colocar um caracter.
const soma4 = require('./new-calc');
test('Soma 1 e A espera 1+A', () => {
    expect(calc.soma(1, 'A')).toBe(1+'A');
});
// Testes para subtração 
const sub = require('./new-calc');
test('Subtração 1 e 2 espera -1', () => {
    expect(calc.sub(1, 2)).toBe(-1);
});

const sub1 = require('./new-calc');
test('Subtração -1 e -2 espera 1', () => {
    expect(calc.sub(-1, -2)).toBe(1);
});
const sub2 = require('./new-calc');
test('Subtração -1 e 2 espera -3', () => {
    expect(calc.sub(-1, 2)).toBe(-3);
});
const sub3 = require('./new-calc');
test('Subtração 1 e 0 espera 1', () => {
    expect(calc.sub(1, 0)).toBe(1);
});
// Testes para multiplicação 

const mult = require('./new-calc');
test('Multiplicação 1 e 2 espera 2', () => {
    expect(calc.mult(1, 2)).toBe(2);
});
const mult1 = require('./new-calc');
test('Multiplicação -1 e -2 espera 2', () => {
    expect(calc.mult(-1, -2)).toBe(2);
});
const mult2 = require('./new-calc');
test('Multiplicação -1 e 2 espera -2', () => {
    expect(calc.mult(-1, 2)).toBe(-2);
});
const mult3 = require('./new-calc');
test('Multiplicação 1 e 0 espera 0', () => {
    expect(calc.mult(1, 0)).toBe(0);
});
// Testes para Divisão 
const div = require('./new-calc');
test('Divisão 2 e 1 espera 2', () => {
    expect(calc.div(2, 1)).toBe(2);
});
const div1 = require('./new-calc');
test('Divisão -2 e -1 espera 2', () => {
    expect(calc.div(-2, -1)).toBe(2);
});
const div2 = require('./new-calc');
test('Divisão -2 e 1 espera -2', () => {
    expect(calc.div(-2, 1)).toBe(-2);
});
const div3 = require('./new-calc');
test('Divisão 0 e 1 espera 0', () => {
    expect(calc.div(0, 1)).toBe(0);
});