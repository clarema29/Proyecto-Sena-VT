const productsList = JSON.parse(localStorage.getItem("products")) || [];

export const removeFromCart = (productId) => {
  let productsList = JSON.parse(localStorage.getItem("products")) || [];
  productsList = productsList.filter((product) => product.id !== productId);
  localStorage.setItem("products", JSON.stringify(productsList));

  // Find the button by data-id attribute and update its state
  const addButton = document.querySelector(`button[data-id="${productId}"]`);
  if (addButton) {
    addButton.textContent = "Añadir al carrito";
    addButton.className = "btn btn-primary";
    addButton.disabled = false;
  }

  location.reload();
};

const createProductCard = ({
  id,
  imagen,
  nombre,
  descripcion,
  precio,
  cantidad,
}) => {
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
  image.src = imagen;
  image.alt = nombre;
  image.className = "img-fluid rounded-3";
  image.style.width = "65px";
  imgContainer.appendChild(image);

  const textContainer = document.createElement("div");
  textContainer.className = "ms-3";

  const name = document.createElement("h5");
  name.textContent = nombre;

  const desc = document.createElement("p");
  desc.className = "small mb-0";
  desc.textContent = descripcion;

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
  quantity.textContent = cantidad;
  quantityContainer.appendChild(quantity);

  const priceContainer = document.createElement("div");
  priceContainer.style.width = "100px";
  const priceEl = document.createElement("h5");
  priceEl.className = "mb-0";
  priceEl.textContent = "$" + precio;
  priceContainer.appendChild(priceEl);

  const deleteProduct = document.createElement("button");
  deleteProduct.className = "btn btn-light";
  deleteProduct.style.background = "transparent";
  deleteProduct.style.color = "red";
  deleteProduct.style.width = "20px";
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt";
  deleteProduct.appendChild(deleteIcon);

  deleteProduct.addEventListener("click", () => {
    removeFromCart(id);
  });

  flexRow2.appendChild(quantityContainer);
  flexRow2.appendChild(priceContainer);
  flexRow2.appendChild(deleteProduct);

  flexContainer.appendChild(flexRow1);
  flexContainer.appendChild(flexRow2);

  cardBody.appendChild(flexContainer);
  card.appendChild(cardBody);

  return card;
};

const fillList = (node) => {
  if (!node) return;

  productsList.forEach((product) => {
    const productCard = createProductCard(product);
    node.appendChild(productCard);
  });
};

const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.precio * product.cantidad;
  }, 0);
};

const getTotalProducts = () => {
  const container = document.getElementById("car-total-products");
  const total = productsList?.length;
  container.textContent = `Tu tienes ${total} productos`;
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
getTotalProducts();
getTotalPrice();
getTotalInvoice();
