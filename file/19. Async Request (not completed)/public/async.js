const btn = document.getElementById("btn");
function deleteBtn() {
  const prodId = btn.parentNode.querySelector("[name=productId]");
  console.log(prodId);
}

btn.addEventListener("click", deleteBtn);
