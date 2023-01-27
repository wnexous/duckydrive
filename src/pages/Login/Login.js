import './Login.module.css'
import style from './../../modules/styles/Styles.module.css'
import Input from '../../components/Input'
import Title from '../../components/Title'
import 'react-icons/fa'
import { FaUser, FaUserTag } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsFillKeyFill } from 'react-icons/bs'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { reduxActions } from '../../store/actions'
import { Link } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const [userTag, setUserTag] = useState('')
  const [userPass, setUserPass] = useState('')

  function userLogin(e) {
    e.preventDefault()
    dispatch(reduxActions.setLogin({ userTag, userPass}))
  }

  return (
    <div className={style.centralize_div}>
      <form className={style.field_forms}>
        <Title>sign in.</Title>

        <Input
          Icon={<FaUserTag />}
          placeholder="nametag"
          type="text"
          autoComplete="user"
          name="usertag"
          set={setUserTag}
        />
        <Input
          Icon={<RiLockPasswordFill />}
          placeholder="password"
          type="password"
          autoComplete="password"
          name="pwd"
          set={setUserPass}
        />

        <Button onClick={userLogin}>sign in</Button>
      </form>
      <p className={style.description_forms}>
        don't have a Ducky account?{' '}
        <Link to="/register" className={style.description_forms_link}>create account.</Link>
      </p>
    </div>
  )
}
