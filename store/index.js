export const state = () => ({
  currency: 'sg',
  sortFilterPopupOn: false,
})

export const mutations = {
  setCurrency(state, payload) {
    state.currency = payload
  },
  setSortFilterPopupOn(state, payload) {
    state.sortFilterPopupOn = payload
  },
}
