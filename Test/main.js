var button = document.getElementById('button');
button.addEventListener("click", foo);
function foo() {
  var rez = 0;
  var el1 = document.getElementById('q1').value;
  if (el1 === "10") {
    rez++;
  }

  var el2 = document.getElementById('q2').value;
  if (el2 === "5") {
    rez++;
  }

  var el3 = document.getElementById('q3').value;
  if (el3 === "15") {
    rez++;
  }

  var el4 = document.getElementById('q4').value;
  if (el4 === "12") {
    rez++;
  }

  var el5 = document.getElementById('q5').value;
  if (el5 === "13") {
    rez++;
  }

  alert("Кольчество правельных ответов = " + rez + " из 5!!!"  )
}
