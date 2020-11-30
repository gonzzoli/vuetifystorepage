export const state = () => ({
  products: [
    {
      id: 1001,
      title: 'Product One',
      price: 142,
      image: '/coffee.jpg',
    },
    {
      id: 1002,
      title: 'Product Two',
      price: 138,
      image: '/drink.jpg',
    },
    {
      id: 1003,
      title: 'Product Three',
      price: 345,
      image: '/v.png',
    },
  ],
  cart: [],
  snackbar: {
    show: false,
    variant: 'success',
    message: 'Success! Item added to the cart.',
  },
})

export const getters = {
  products: (state) => state.products,
  cart: (state) => state.cart,
}

export const actions = {
  actAddProduct: ({ commit }, id) => {
    commit('addProduct', id)
  },
}

export const mutations = {
  addProduct(state, id) {
    state.cart.push(id)
    state.snackbar.show = true
  },
  closeSnackbar(state) {
    state.snackbar.show = false
  },
}
