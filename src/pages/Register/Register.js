import './Register.module.css'
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

export default function Register() {
  const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState('')
  const [userTag, setUserTag] = useState('')
  const [userPass, setUserPass] = useState('')
  const [userToken, setUserToken] = useState('')

  function userRegister(e) {
    e.preventDefault()
    dispatch(reduxActions.setLogin({ userLogin, userTag, userPass, userToken }))
    localStorage.setItem("userLogin", userLogin)
    
    
  }

  return (
    <div className={style.centralize_div}>
      <form className={style.field_forms}>
        {localStorage.getItem('userLogin')}
        <Title>create your account.</Title>
        <Input
          Icon={<FaUser />}
          placeholder="your name"
          type="text"
          name="name"
          set={setUserLogin}
        />
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
          placeholder="type your password"
          type="password"
          autoComplete="password"
          name="pwd_1"
          set={setUserPass}
        />
        <Input
          Icon={<BsFillKeyFill />}
          placeholder="invite token"
          type="text"
          autoComplete="token"
          name="token"
          set={setUserToken}
        />
        <Button onClick={userRegister}>create account</Button>
      </form>
      <p className={style.description_forms}>
        when you click create account, you will agree to the{' '}
        <Link className={style.description_forms_link} to="/ducky-terms">
          ducky terms.
        </Link>
      </p>
    </div>
  )
}
