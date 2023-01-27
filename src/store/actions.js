export const reduxActions = {
  modules: {
    userLogin: '@userLogin',
  },

  setLogin: (data = {}) => {
    return {
      type: [reduxActions.modules.userLogin, 'SET_LOGIN'].join('/'),
      data,
    }
  },
}
