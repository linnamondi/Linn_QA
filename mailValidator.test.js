const isValidEmail =require('./mailvalidator');
test( "isValidEmail", () => {
    expect(isValidEmail(" ")).toBe("valid");
});