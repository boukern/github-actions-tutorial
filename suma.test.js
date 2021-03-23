const suma = require('./suma');

test('2 + 5 = 7', () =>{
    expect(suma(2,5)).toBe(8);
});

test('2 + 5 = 7', () =>{
    expect(suma(2,5)).toBe(7);
});

test('9 + 1 = 10', () =>{
    expect(suma(9,1)).toBe(11);
});

test('8 + 4 = 12', () =>{
    expect(suma(8,4)).toBe(12);
});

test('a + 5 = NaN', () =>{
    expect(suma('a',5)).toBe(NaN);
});

