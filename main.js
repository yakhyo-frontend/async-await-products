const API = `https://dummyjson.com/products`;
const cards = document.querySelector(".cards");
const textLoading = document.querySelector(".text-box");

textLoading.textContent = "Loading...";
textLoading.classList.add("show");

async function fetchProducts() {
  try {
    const response = await axios.get(API);
    showdata(response.data.products);
  } catch (error) {
    console.error("Axios request failed:", error);
  }
}

fetchProducts();

function showdata(products) {
  textLoading.classList.remove("show");
  products.forEach((element) => {
    const { id, thumbnail, title, description, price } = element;

    cards.innerHTML += `
        <div class="card">
        <img class="card-img" src="${thumbnail}" alt="">
        <h4 class="title">${title.slice(0, 25)}</h4>
        <p class="description">${description.slice(0, 80)}</p>
        <p class="price">$${price}</p>

        </div>
    `;
  });
}
