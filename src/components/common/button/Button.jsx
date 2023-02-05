const Button = ({className,children,onclick,type}) => {
  return (
    <button
    type={type}
    onClick={onclick}
     className={className}>{children}</button>
  )
}

export default Button;