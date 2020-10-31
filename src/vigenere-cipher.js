const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.codeA = 65;
    this.charsLength = 26; //en
  }
  encrypt(sourceMessage, key) {
    if (!(sourceMessage && key)) throw new Error();

    const keyLength = key.length;
    const self = this;
    let i = 0;
    sourceMessage = sourceMessage.toUpperCase();
    key = key.toUpperCase().split("");

    let res = sourceMessage.split("").map((char) => {
      if (!/[A-Z]/.test(char)) return char;

      let charCode = char.charCodeAt() - self.codeA;
      let keyCharCode = key[i % keyLength].charCodeAt() - self.codeA;
      i++;

      return String.fromCharCode(
        self.codeA + ((charCode + keyCharCode) % self.charsLength)
      );
    });

    return this.mode ? res.join("") : res.reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) throw new Error("Needs two arguments");

    const keyLength = key.length;
    const self = this;
    let res = "";
    let i = 0;
    key = key.toUpperCase().split("");

    res = encryptedMessage.split("").map((char) => {
      if (!/[A-Z]/.test(char)) return char;

      let charCode = char.charCodeAt() - self.codeA;
      let keyCharCode = key[i % keyLength].charCodeAt() - self.codeA;
      i++;

      return String.fromCharCode(
        self.codeA +
          ((charCode - keyCharCode + self.charsLength) % self.charsLength)
      );
    });
    return this.mode ? res.join("") : res.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;

// const directMachine = new VigenereCipheringMachine();
// console.log(
//   directMachine.encrypt("attack at dawn!", "alphonse"),
//   "AEIHQX SX DLLU!"
// );
