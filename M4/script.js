document.addEventListener("keydown", myFunction);

function dis(val) {
  document.getElementById("result").value += val;
}

function myFunction(event) {
  if (/[0-9+\-*/.]/.test(event.key)) {
    document.getElementById("result").value += event.key;
  } else if (event.key === "Enter") {
    solve();
  } else if (event.key === "Backspace") {
    backspace();
  }
}

function solve() {
  try {
    let x = document.getElementById("result").value;
    if (x) {
      document.getElementById("result").value = math.evaluate(x);
    }
  } catch (e) {
    alert("Invalid Expression");
  }
}

function clr() {
  document.getElementById("result").value = "";
}

function backspace() {
  let input = document.getElementById("result");
  input.value = input.value.slice(0, -1);
}
