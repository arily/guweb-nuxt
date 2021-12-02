export const state = () => ({
  no_header: false
})

export const mutations = {
  setNoHeader (state, value) {
    state.no_header = value
  }
}
