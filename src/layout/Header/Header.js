import styles from './Header.module.css'
import 'react-icons/fa'
import '../../../src/index.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <div
        className={[
          'centralize_h',
          styles.w_100,
          styles.h_100,
          styles.right,
        ].join(' ')}
      >
        <Link to="/" className={[styles.icon, 'centralize_h'].join(' ')}>
          <img src="./logo.svg" alt="logo" />
        </Link>
      </div>

      <div className={[styles.display_mode, styles.login_btns].join(' ')}>
        <Link className="link_btn" to="/register">
          <p>Create Account</p>
        </Link>
        <Link className="link_btn" to="/login">
          <p>Login</p>
        </Link>
      </div>
    </header>
  )
}
