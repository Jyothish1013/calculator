let num = "";
let result = 0;

function calc(a) {
  num += a;
  if (a === "+" || a === "-" || a === "*" || a === "/"  || a === "(" || a === ")") {
    display();
  } else {
    result = eval(num);
    display();
    display1();
  }
}

function equal() {
  const b = document.querySelector("#text");
  b.value = "";
  num = "";
}

function display() {
  const b = document.querySelector("#text");
  b.value = num;
}
function display1() {
  const b = document.querySelector("#text1");
  b.value = result;
}

function allClear() {
  num = "";
  result = 0;
  display();
  display1();
}

function removeLast() {
  num = num.slice(0, -1);
  display();
  result = eval(num);
  if (result == undefined) {
    result = 0;
    display1();
  } else {
    display1();
  }
  console.log(num);
}

function textFrom() {
  const a = document.querySelector("#text").value;
  num = a;
  result = eval(num);
  if (result == undefined) {
    result = 0;
    display1();
  } else {
    display1();
  }
}
