const fakeProduct = {
  id: 123,
  imgSrc:
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
  label: "Iphone 11 pro",
  description: "256GB, Navy Blue",
  price: 1200000,
  amount: 1,
};

export const handleClick = () => {
  const productsList = JSON.parse(localStorage.getItem("products")) || [];
  productsList.push(fakeProduct);
  localStorage.setItem("products", JSON.stringify(productsList));
};

const addToCarBtn = document.getElementById("add-To-Car");
addToCarBtn?.addEventListener("click", handleClick);

const addToCarListener = () => {
  const addToCarBtn = document.getElementById("add-To-Car");
  addToCarBtn?.addEventListener("click", handleClick);
};

export { addToCarListener };
