

const stringGreet = (first: string, second: string) => console.log("stringGreet: " + first + second)

stringGreet("number one", "number two")

const nestedStringGreet = (first: string) => (second: string) => console.log("nestedStringGreet: " + first + second)

nestedStringGreet("number one")("number two")

const welcome = nestedStringGreet("Welcome, ")

welcome("Mr. Smith")
welcome("Ms. Anderson")

export { }