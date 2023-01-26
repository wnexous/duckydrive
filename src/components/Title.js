import styleC from './StyleComponents.module.css'
export default function Title(props) {
  return (
    <>
      <p className={styleC.title}>{props.children}</p>
    </>
  )
}
