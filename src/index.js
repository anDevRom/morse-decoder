const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = []
    for (let i = 0; i < expr.length; i = i + 10) {
      arr.push(String(+expr.slice(i, i + 10)))
    }
    arr.forEach((el, index, array) => {
      let arrInner = []
      for (let i = 0; i < el.length; i = i + 2) {
        arrInner.push(el.slice(i, i + 2))
      }
      arrInner.forEach((elem, ind) => {
        switch (elem) {
          case "10":
            arrInner[ind] = "."
            break
          case "11":
            arrInner[ind] = "-"
            break
        }
      })
      array[index] = arrInner.join("")
    })
    return arr.reduce((prev, curr) => {
      if (curr === "NaN") {
        return prev + " "
      }
      return prev + MORSE_TABLE[curr]
    }, "")
}

module.exports = {
    decode
}