import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../common/button/Button';
import FormErrors from './FormErrors';
import './NewsLetterForm.scss'
const NewsLetterForm = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onRegister=(data)=>{
        console.log(data);
    }
  return (
    <form className='newsletter_form' onSubmit={handleSubmit(onRegister)}>
        <input className='email_input'
        placeholder='ایمیل خود را وارد کنید...'
         {...register("email",{required:true,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/})} />
         <FormErrors errors={errors}/>
         <Button  type='submit' className='newsletter_submit'>عضویت</Button>
    </form>
  )
}

export default NewsLetterForm