export const state = () => ({
  currency: 'sg',
  sortFilterPopupOn: false,
  mapViewPopupOn: false,
  country: '',
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
  setCountry(state, payload) {
    state.country = payload
  },
}
