export const state = () => ({
  currency: 'sg',
})

export const mutations = {
  setCurrency(state, payload) {
    state.currency = payload
  },
}
