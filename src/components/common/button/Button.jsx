const Button = ({className,children,onclick,type}) => {
  return (
    <button
    type={type}
    onclick={onclick}
     className={className}>{children}</button>
  )
}

export default Button