const calc = require('./new-calc');
test('Soma 1 e 2 espera 3', () => {
    expect(calc.soma(1, 2)).toBe(3);
});

test('Soma 2 e 2 espera 4', () => {
    expect(calc.soma(2, 2)).toBe(4);
});

test('Soma -1 e -2 espera -3', () => {
    expect(calc.soma(-1, -2)).toBe(-3);
});

test('Soma -1 e 2 espera 1', () => {
    expect(calc.soma(-1, 2)).toBe(1);
});

test('Soma 5 e 0 espera 5', () => {
    expect(calc.soma(5, 0)).toBe(5);

});
//Essa soma4 é para colocar um caracter.

test('Soma 1 e A espera 1+A', () => {
    expect(calc.soma(1, 'A')).toBe(1+'A');

});
// Testes para subtração 

test('Subtração 1 e 2 espera -1', () => {
    expect(calc.sub(1, 2)).toBe(-1);
});


test('Subtração -1 e -2 espera 1', () => {
    expect(calc.sub(-1, -2)).toBe(1);
});

test('Subtração -1 e 2 espera -3', () => {
    expect(calc.sub(-1, 2)).toBe(-3);
});

test('Subtração 1 e 0 espera 1', () => {
    expect(calc.sub(1, 0)).toBe(1);
});

// Testes para multiplicação 

const mult = require('./new-calc');
test('Multiplicação 1 e 2 espera 2', () => {
    expect(calc.mult(1, 2)).toBe(2);
});

test('Multiplicação -1 e -2 espera 2', () => {
    expect(calc.mult(-1, -2)).toBe(2);
});

test('Multiplicação -1 e 2 espera -2', () => {
    expect(calc.mult(-1, 2)).toBe(-2);
});

test('Multiplicação 1 e 0 espera 0', () => {
    expect(calc.mult(1, 0)).toBe(0);
});

// Testes para Divisão 

test('Divisão 2 e 1 espera 2', () => {
    expect(calc.div(2, 1)).toBe(2);
});

test('Divisão -2 e -1 espera 2', () => {
    expect(calc.div(-2, -1)).toBe(2);
});

test('Divisão -2 e 1 espera -2', () => {
    expect(calc.div(-2, 1)).toBe(-2);
});

test('Divisão 0 e 1 espera 0', () => {
    expect(calc.div(0, 1)).toBe(0);
});

test('Divide 3 e 0 espera Infinity', () => {
    expect(calc.div(3, 0)).toBe(Infinity);
});
