const INITIAL_STATE = {
  name: '',
  usertag: '',
  pwd: '',
  token: '',
}

export default function userLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@userLogin/SET_LOGIN': {
      return (state = action.data)
    }
    default:
      return state
  }
}
