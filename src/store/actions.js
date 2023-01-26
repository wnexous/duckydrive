export const reduxActions = {
  setLogin: (data = {}) => {
    return { type: '@userLogin/SET_LOGIN', data }
  },
}
