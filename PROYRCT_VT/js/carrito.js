const productsList = JSON.parse(localStorage.getItem("products")) || [];

const fillList = (node) => {
  if (!node) return;

  productsList.forEach(({ id, imgSrc, label, description, price, amount }) => {
    // Crear los elementos según la nueva estructura
    const card = document.createElement("div");
    card.className = "card mb-3";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const flexContainer = document.createElement("div");
    flexContainer.className = "d-flex justify-content-between";

    const flexRow1 = document.createElement("div");
    flexRow1.className = "d-flex flex-row align-items-center";

    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = imgSrc;
    image.alt = label;
    image.className = "img-fluid rounded-3";
    image.style.width = "65px";
    imgContainer.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.className = "ms-3";

    const name = document.createElement("h5");
    name.textContent = label;

    const desc = document.createElement("p");
    desc.className = "small mb-0";
    desc.textContent = description;

    textContainer.appendChild(name);
    textContainer.appendChild(desc);

    flexRow1.appendChild(imgContainer);
    flexRow1.appendChild(textContainer);

    const flexRow2 = document.createElement("div");
    flexRow2.className = "d-flex flex-row align-items-center";

    const quantityContainer = document.createElement("div");
    quantityContainer.style.width = "50px";
    const quantity = document.createElement("h5");
    quantity.className = "fw-normal mb-0";
    quantity.textContent = amount;
    quantityContainer.appendChild(quantity);

    const priceContainer = document.createElement("div");
    priceContainer.style.width = "80px";
    const priceEl = document.createElement("h5");
    priceEl.className = "mb-0";
    priceEl.textContent = "$" + price;
    priceContainer.appendChild(priceEl);

    const deleteLink = document.createElement("a");
    deleteLink.href = "#!";
    deleteLink.style.color = "#cecece";
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    deleteLink.appendChild(deleteIcon);

    flexRow2.appendChild(quantityContainer);
    flexRow2.appendChild(priceContainer);
    flexRow2.appendChild(deleteLink);

    flexContainer.appendChild(flexRow1);
    flexContainer.appendChild(flexRow2);

    cardBody.appendChild(flexContainer);
    card.appendChild(cardBody);

    node.appendChild(card);
  });
};

const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);
};

const getTotalPrice = () => {
  const container = document.getElementById("list-car-total-price");
  const total = calculateTotalPrice(productsList);
  container.textContent = `$ ${total}`;
};

const getTotalInvoice = () => {
  const container = document.getElementById("list-car-total-invoice");
  const totalPrice = calculateTotalPrice(productsList);
  const ship = document.getElementById("list-car-total-ship");
  container.textContent = `$ ${totalPrice + Number(ship.textContent)}`;
};

const carProductsContainer = document.getElementById("list-car-items");
fillList(carProductsContainer);

getTotalPrice();
getTotalInvoice();
