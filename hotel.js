
let addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {
  button.addEventListener("click", function() {
    alert("Item added to your order!");
  });
});

let orderItems = document.querySelectorAll(".order-item");

orderItems.forEach(item => {
  let minusBtn = item.querySelector(".icon button:first-child");
  let plusBtn = item.querySelector(".icon button:last-child");
  let qtySpan = item.querySelector(".icon span");

  plusBtn.addEventListener("click", function() {
    let qty = parseInt(qtySpan.textContent);
    qty++;
    qtySpan.textContent = qty;
  });

  minusBtn.addEventListener("click", function() {
    let qty = parseInt(qtySpan.textContent);
    if (qty > 1) {
      qty--;
      qtySpan.textContent = qty;
    }
  });
});

