export const state = () => ({
  currency: 'sg',
  sortFilterPopupOn: false,
  mapViewPopupOn: false,
})

export const mutations = {
  setCurrency(state, payload) {
    state.currency = payload
  },
  setSortFilterPopupOn(state, payload) {
    state.sortFilterPopupOn = payload
  },
  setMapViewPopupOn(state, payload) {
    state.mapViewPopupOn = payload
  },
}
