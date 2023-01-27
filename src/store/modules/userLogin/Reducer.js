import { reduxActions } from '../../actions'
const INITIAL_STATE = {
  name: '',
  usertag: '',
  pwd: '',
  token: '',
}

export default function userLogin(state = INITIAL_STATE, action) {
  const MODULE_NAME = reduxActions.modules.userLogin
  switch (action.type) {
    case [MODULE_NAME, 'SET_LOGIN'].join('/'): {
      return (state = action.data)
    }
    default:
      return state
  }
}
