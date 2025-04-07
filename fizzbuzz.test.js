const fizzBuzz =require('./fizzbuzz');
test( "fizzBuzz", () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
});
test( "fizzBuzz", () => {
    expect(fizzBuzz(3)).toBe ("Fizz");

});
test( "fizzBuzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});
