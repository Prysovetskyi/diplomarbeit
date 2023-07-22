import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderForm = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { data, status} = useSelector(state => state.basket);
  const [orderSuccess] = useState(false);
  const [orderError] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = order => {
    console.log(order)
  }

  const priceRender = () => {
    if (products.status === 'resolve') {
      return data.reduce((prev, item) => {
        const product = products.data.find(el => el.id === item.id)
        return prev + item.count * product.finalPrice
      }, 0).toFixed(2);
    } else {
      return 0;
    }
  }

  const changeClass = () => {
    return errors.phone?.type && data.length ? `${s.phone_number} ${s.reject}` : s.phone_number;
  }

  return (
    <>
      {
        !data.length
          ?
          <Link to="/products/all" className={s.btn_shop}>
            Shop Now
          </Link>
          :
          <form onSubmit={handleSubmit(onSubmit)} className={s.basket_form}>
            <h3 className={s.title}>Order details</h3>
            <div className={s.total_blok}>
              <p className={s.total_text}>Total</p>
              <p className={s.total_sum}>{priceRender()}$</p>
            </div>
            <div className={s.inputs}>
              <input
                className={changeClass()}
                type="tel"
                name="phone"
                {...register("phone")}
                placeholder='Phone number'
              />
              <input className={s.order_btn} type="submit" value="Order" />
            </div>
            {orderSuccess && <p>Order Successfuly Placed!</p>}
            {orderError && <p>Error placing the order. Please try again later.</p>}
          </form>
      }
    </>

  );
};

export default OrderForm;
