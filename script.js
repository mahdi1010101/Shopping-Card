const calculerSomme = function () {
  let somme = 0;
  document.querySelectorAll(".card").forEach((card) => {
    let quantity = Number(card.querySelector(".quantity").textContent);
    let price = Number(
      card.querySelector(".unit-price").textContent.replace("$", "")
    );
    somme += quantity * price;
  });
  document.querySelector(".total").textContent = `${somme} $`;
};

document.querySelectorAll(".card").forEach((card) => {
  const addBtn = card.querySelector(".fa-plus-circle");
  const deleteBtn = card.querySelector(".fa-minus-circle");
  const removeBtn = card.querySelector(".fa-trash-alt");
  const likeBtn = card.querySelector(".fa-heart");
  let quantity = Number(card.querySelector(".quantity").textContent);
  addBtn.addEventListener("click", () => {
    card.querySelector(".quantity").textContent = ++quantity;
    calculerSomme();
  });
  deleteBtn.addEventListener("click", () => {
    if (quantity > 0) card.querySelector(".quantity").textContent = --quantity;
    calculerSomme();
  });
  removeBtn.addEventListener("click", () => {
    card.parentElement.removeChild(card);
    calculerSomme();
  });
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
});
