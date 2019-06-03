export default {
  namespaced: true,
  state: {
    loading: false,
    contentLoading: 'Loading'
  },
  getters: {
    isLoading: state => state.loading,
    contentLoading: state => state.contentLoading
  },
  mutations: {
    setLoading: (state, load) => {
      state.loading = load;
    },
    setContentLoading(state, content) {
      state.contentLoading = content;
    }
  }
};
