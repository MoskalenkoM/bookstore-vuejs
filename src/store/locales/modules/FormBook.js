export default {
  namespaced: true,
  state: {
    formLabels: {
      labelOne: 'SIGN IN',
      labelTwo: 'or',
      labelThree: 'SIGN UP',
      labelFour: 'via',
      placeholder: '> email ⁄ phone',
      typeInput: 'text',
      step: 1,
      shadowGreen1: 'shadow_green',
      shadowGreen2: '',
      shadowGreen3: 'shadow_green',
      shadowGreen4: '',
      stepStatus: ''
    },
    resendReset: ''
  },
  getters: {
    formLabels: state => state.formLabels,
    resendReset: state => state.resendReset
  },
  mutations: {
    setFormLabels(state, dataLabels) {
      const keysDataLabels = Object.keys(dataLabels);
      keysDataLabels.forEach(keyLabel => {
        state.formLabels[keyLabel] = dataLabels[keyLabel];
      });
    },
    setResendReset(state, content) {
      state.resendReset = content;
    }
  }
};
