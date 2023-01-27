import React from 'react'

const FormErrors = ({errors}) => {
  return (
    <>
         {errors.email?.type==="required" && <span className='email_required_error'>وارد کردن ایمیل الزامی است.</span>}
        {errors.email?.type==="pattern"&& <span className='email_pattern_error'>ایمیل وارد شده معتبر نمیباشد.</span>}
    </>
  )
}

export default FormErrors