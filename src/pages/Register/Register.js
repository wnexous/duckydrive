import './Register.css'
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

export default function Register() {
  const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState('')
  const [userTag, setUserTag] = useState('')
  const [userPass, setUserPass] = useState('')
  const [userToken, setUserToken] = useState('')

  function userRegister(e) {
    e.preventDefault()
    dispatch(reduxActions.setLogin({ userLogin, userTag, userPass, userToken }))
  }

  return (
    <div className={style.centralize_div}>
      <form className={style.field_forms}>
        <Title>Crie sua conta.</Title>
        <Input
          Icon={<FaUser />}
          placeholder="Nome de usuário"
          type="text"
          name="name"
          set={setUserLogin}
        />
        <Input
          Icon={<FaUserTag />}
          placeholder="Tag de usuário"
          type="text"
          autoComplete="user"
          name="usertag"
          set={setUserTag}
        />
        <Input
          Icon={<RiLockPasswordFill />}
          placeholder="Digite sua senha"
          type="password"
          autoComplete="password"
          name="pwd_1"
          set={setUserPass}
        />
        <Input
          Icon={<BsFillKeyFill />}
          placeholder="Chave de convite"
          type="text"
          autoComplete="token"
          name="token"
          set={setUserToken}
        />
        <Button onClick={userRegister}>Registrar</Button>
      </form>
    </div>
  )
}
