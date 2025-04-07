

const {add,subtract,multiply,divide}=require('./math');
test('add 2+3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});


test('subtract 5-2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiply 5*2 to equal 10', () => {
    expect(multiply(5, 2)).toBe(10);
});

test('divide 8//2 to equal 4', () => {
    expect(divide(8, 2)).toBe(4);
});










