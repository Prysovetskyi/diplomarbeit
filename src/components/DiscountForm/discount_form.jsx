import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './style.module.css';
import { useEffect } from 'react';
import gnom from '../Media/gnome.png'

const DiscountForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [message] = useState('');

  const onSubmit = data => {console.log(data)}
  
  useEffect(() => {
    if (isSubmitSuccessful) {reset({ phone: '' })}
  }, [isSubmitSuccessful, reset])

  const changeClass = () => {return errors.phone?.type === 'pattern' ? `${s.input_tel} ${s.reject}` : s.input_tel;}

  return (
    <div className={s.form}>
      <div className={s.disc_item}>
        <img className={s.gnome} src={gnom} alt="gnome" />
        <div className={s.disc_form_box}>
          <p className={s.disc_info}>
            <span > 5% off </span> <br />
            on the first order
          </p>
          <form className={s.disc_form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={changeClass()}
              type='tel'
              {...register("phone")}
              placeholder='Phone number'
            />
            {
              errors.phone?.type === 'required' &&
              <p className={s.required}>
                Wrong number
              </p>
            }
            {message && <p>{message}</p>} 
            <input className={s.submit_btn} type="submit" value="Get a discount" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
