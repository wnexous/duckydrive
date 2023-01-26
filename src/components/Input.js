import styleC from './StyleComponents.module.css'

export default function Input(props) {
  return (
    <span className={[styleC.force_flex, styleC.input_filed].join(' ')}>
      <span className={styleC.icon_input}>{props.Icon}</span>
      <input
        placeholder={props.placeholder ? props.placeholder : 'Preencha o campo'}
        type={props.type ? props.type : 'text'}
        autoComplete={props.autoComplete}
        name={props.name}
        onChange={
          (e) => props.set(e.target.value)
          // props.set.setLgn((props.set.lgn[props.name] = e.value))
        }
        required
      />
    </span>
  )
}
