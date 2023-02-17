import "./formErrors.scss"

const FormErrors = ({errors}) => {
  return (
    <>
         {errors.email?.type==="required" && <span className='email_required_error'>وارد کردن ایمیل الزامی است.</span>}
        {errors.email?.type==="pattern"&& <span className='email_pattern_error'>ایمیل وارد شده معتبر نمیباشد.</span>}
        {errors.password?.type==="required"&& <span className='email_pattern_error'> رمز عبور الزامیست.</span>}
        {errors.password?.type==="minLength"&& <span className='email_pattern_error'> رمز عبور باید حداقل 4 کارکتر باشد</span>}
        {errors.password?.type==="maxLength"&& <span className='email_pattern_error'>   رمز عبور نباید بیشتر از 22 کارکتر باشد</span>}
    </>
  )
}

export default FormErrors