import "./styles/app.scss";

let word = "";
let str = " ";
let first = null;
let size = 10;

for (let row = 0; row < size; row++) {
  for (let i = 0; i < size; i++) {
    if (str[i] === " " && str.length != size) {
      str += "#";
    } else if (str[i] === "#" && str.length != size) {
      str += " ";
    }
    first = str[0];
  }

  word += str + "\n";

  if (first === " ") {
    str = "#";
  } else if (first === "#") {
    str = " ";
  }
}

console.log(word);
