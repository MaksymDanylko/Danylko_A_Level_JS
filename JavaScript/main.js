console.log(Redux);

const buyProduct = (product, quantity, funds) => ({
  type: "BUY_PRODUCT",
  payload: { product, quantity, funds },
});

const initialState = {
  products: {
    beer: { quantity: 100, price: 2 },
    chips: { quantity: 50, price: 1.5 },
    soda: { quantity: 80, price: 1 },
  },
  cash: 0,
};

const kioskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_PRODUCT":
      const { product, quantity, funds } = action.payload;
      const productDetails = state.products[product];

      if (!productDetails) return state; // Invalid product

      const totalPrice = quantity * productDetails.price;

      if (productDetails.quantity < quantity) {
        alert("Not enough product in stock");
        return state;
      }

      if (funds < totalPrice) {
        alert("Not enough funds");
        return state;
      }

      return {
        ...state,
        products: {
          ...state.products,
          [product]: {
            ...productDetails,
            quantity: productDetails.quantity - quantity,
          },
        },
        cash: state.cash + totalPrice,
      };

    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(kioskReducer);

const productSelect = document.getElementById("product-select");
const quantityInput = document.getElementById("quantity");
const fundsInput = document.getElementById("funds");
const buyButton = document.getElementById("buy-button");
const productsDiv = document.getElementById("products");

const renderProducts = () => {
  const state = store.getState();
  productsDiv.innerHTML = "";
  productSelect.innerHTML = "";

  for (const [product, details] of Object.entries(state.products)) {
    const productDiv = document.createElement("div");
    productDiv.textContent = `${product}: ${details.quantity} available at $${details.price} each`;
    productsDiv.appendChild(productDiv);

    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
  }

  document.title = `Kiosk - Cash: $${state.cash}`;
};

store.subscribe(renderProducts);

buyButton.addEventListener("click", () => {
  const product = productSelect.value;
  const quantity = parseInt(quantityInput.value, 10);
  const funds = parseFloat(fundsInput.value);

  if (isNaN(quantity) || isNaN(funds) || quantity <= 0 || funds < 0) {
    alert("Please enter valid quantity and funds");
    return;
  }

  store.dispatch(buyProduct(product, quantity, funds));
});

renderProducts();