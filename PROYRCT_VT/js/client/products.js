import { config } from "../../config.js";

const productsContainer = document.getElementById("products-container");

const getProducts = async () => {
  // URL del endpoint
  const url = `${config.API_URL}/productos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const handleClick = (product) => {
  const productsList = JSON.parse(localStorage.getItem("products")) || [];
  productsList.push(product);
  localStorage.setItem("products", JSON.stringify(productsList));
};

// Función que crea una tarjeta de producto
const createProductCard = ({
  id,
  imagen,
  nombre,
  descripcion,
  precio,
  cantidad,
}) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  const image = document.createElement("img");
  image.src = imagen;
  image.alt = nombre;

  const productName = document.createElement("h2");
  productName.textContent = nombre;

  const productDescription = document.createElement("p");
  productDescription.className = "description";
  productDescription.textContent = descripcion;

  const productPrice = document.createElement("p");
  productPrice.className = "price";
  productPrice.textContent = `$${precio}`;

  const addButton = document.createElement("button");
  addButton.textContent = "Añadir al carrito";
  addButton.setAttribute("data-id", id);

  // Verificar si el producto ya está en el carrito
  const productsList = JSON.parse(localStorage.getItem("products")) || [];
  const isInCart = productsList.some((product) => product.id === id);
  if (isInCart) {
    addButton.textContent = "Agregado al carrito";
    addButton.className = "btn btn-success";
    addButton.disabled = true;
  }
  if (cantidad < 1) addButton.disabled = true;

  addButton.addEventListener("click", () => {
    handleClick({
      id,
      imagen,
      nombre,
      descripcion,
      precio,
      cantidad,
      cifra: 1,
    });
    addButton.textContent = "Agregado al carrito";
    addButton.className = "btn btn-success";
    addButton.disabled = true;
  });

  productDiv.appendChild(image);
  productDiv.appendChild(productName);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(addButton);

  return productDiv;
};

const fillProducts = (node, products = []) => {
  if (!node) return;

  products.forEach((product) => {
    const productCard = createProductCard(product);
    node.appendChild(productCard);
  });
};

getProducts().then((products) => {
  fillProducts(productsContainer, products);
});
