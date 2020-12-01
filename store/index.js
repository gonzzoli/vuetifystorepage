export const state = () => ({
  products: [
    {
      id: 1001,
      title: 'Some Coffee',
      price: 142,
      image: '/coffee.jpg',
      inCart: 0,
    },
    {
      id: 1002,
      title: 'A Good Drink',
      price: 138,
      image: '/drink.jpg',
      inCart: 0,
    },
    {
      id: 1003,
      title: 'The Vue Logo',
      price: 345,
      image: '/v.png',
      inCart: 0,
    },
    {
      id: 1004,
      title: 'A Nintendo Switch',
      price: 648,
      image: '/nintendo.jpg',
      inCart: 0,
    },
    {
      id: 1005,
      title: 'An Xbox Series S',
      price: 1200,
      image: '/xbox.jpg',
      inCart: 0,
    },
    {
      id: 1006,
      title: 'Some Coffee',
      price: 542,
      image: '/coffee.jpg',
      inCart: 0,
    },
    {
      id: 1007,
      title: 'A Good Drink',
      price: 784,
      image: '/drink.jpg',
      inCart: 0,
    },
    {
      id: 1008,
      title: 'The Vue Logo',
      price: 1057,
      image: '/v.png',
      inCart: 0,
    },
    {
      id: 1009,
      title: 'A Nintendo Switch',
      price: 78,
      image: '/nintendo.jpg',
      inCart: 0,
    },
    {
      id: 1010,
      title: 'An Xbox Series S',
      price: 115,
      image: '/xbox.jpg',
      inCart: 0,
    },
  ],
  snackbar: {
    show: false,
    variant: 'success',
    add: true,
    message: null,
  },
  priceLimit: 999999,
})

export const getters = {
  products: (state) => state.products,
  cart: (state) => state.cart,
  filteredProducts: (state) =>
    state.products.filter((product) => product.price < state.priceLimit),
  inCartProducts: (state) =>
    state.products.filter((product) => product.inCart > 0),
}

export const actions = {
  actAddProduct: ({ commit }, id) => {
    commit('addProduct', id)
  },
  actRemoveProduct: ({ commit }, id) => {
    commit('removeProduct', id)
  },
  actFilterProducts: ({ commit }, priceLimit) => {
    commit('filterProducts', priceLimit)
  },
}

export const mutations = {
  addProduct(state, id) {
    state.products.find((product) => product.id === id).inCart += 1
    state.snackbar.message = 'Item added to the cart.'
    state.snackbar.variant = 'success'
    state.snackbar.show = true
  },
  removeProduct(state, id) {
    state.products.find((product) => product.id === id).inCart -= 1
    state.snackbar.message = 'Item removed from the cart.'
    state.snackbar.variant = 'error'
    state.snackbar.show = true
  },
  closeSnackbar(state) {
    state.snackbar.show = false
  },
  filterProducts(state, priceLimit) {
    state.priceLimit = priceLimit
  },
}
