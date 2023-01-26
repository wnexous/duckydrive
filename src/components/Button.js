import styleC from './StyleComponents.module.css'
export default function Button(props) {
  return (
    <>
      <button
        onClick={(e) => props.onClick(e)}
        type={props.type}
        className={styleC.btn_form}
      >
        {props.children}
      </button>
    </>
  )
}
