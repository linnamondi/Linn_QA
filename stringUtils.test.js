const reverseString =require('./stringUtils');
test( "reverseString", () => {
    expect(reverseString("pot")).toBe("top");
});