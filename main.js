// Array metodlarini 2 xil turi boladi, 1-chisi - Oddiy, 2-chisi - Murakkab, oddiyni ichiga - pop, push, shift, unshift kiradi, murakkabga esa - filter, sort, forEach, map kiradi, va yana murakkab metodla 2 xil turga bolinadi - 1-chisi - array qaytaradigan, 2-chisi array qaytarmidgan, array qaytaradganga - filter, sort, map, reduce kiradi, qaytarmidganga esa - forEach

const API = `https://dummyjson.com/products`;
const cards = document.querySelector(".cards");
const card = document.querySelector(".card");

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
  products.forEach((element) => {
    const { id, thumbnail, title, description, price } = element;

    cards.innerHTML += `
        <div class="card">
        <img class="card-img" src="${thumbnail}" alt="">
        <h4 class="title">${title.slice(0, 25)}</h4>
        <p class="description">${description.slice(0, 80)}</p>
        <p class="price">$${price}</p>
        <img
  width="30px"
  class="card-icon"
  src="./icons/Bag-Suitcase-Add-Plus--Streamline-Sharp.png"
/>
        </div>
    `;
  });
}
