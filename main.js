let money = 0

function moremoney(n) {
  money += n;
  document.getElementById("moneydisplay").innerHTML = money;
}
setInterval(moremoney,50,1);