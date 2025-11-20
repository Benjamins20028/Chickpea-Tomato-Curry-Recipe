function changetitle() {
  let x = document.getElementById("maintitle").value;
  document.getElementById("change").innerHTML = x;
}

function changecolor() {
    document.getElementById("ingredientsList").style.color = "red";
}
function amountingredient() {
  let x = document.getElementById("favoritespice").value;
  document.getElementById("spicy").innerHTML = "1 tablespoon of " + x;
}
