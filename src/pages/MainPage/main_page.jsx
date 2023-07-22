import React, { useEffect } from 'react';
import s from './style.module.css'
import baner from '../../components/Media/Sale_img.png'
import { Link } from 'react-router-dom'
import CategoryItem from '../../components/CategoryItem/category_item';
import { useSelector } from 'react-redux';
import DiscountForm from '../../components/DiscountForm/discount_form';
import ProductItem from '../../components/ProductItem/product_item';

const MainPage = () => {
    const { categories, products } = useSelector(state => state)
    useEffect(() => {document.title = "GARDEN | TEL-RAN: IT"},[])
    return (
        <div className={s.main_page}>
            <div className={s.container_poster}>
                <div className={s.sale_poster}>
                    <div className={s.poster_info}></div>
                    <div className={s.baner}>
                        <img src={baner} alt="bush"/>
                        <Link to='/sales/sales_all'><button className={s.sale_btn}>Sale</button></Link> 
                    </div>
                </div>
            </div>
            <div className={s.categories_blok}>
                <div className={s.categories_blok_header}>
                    <h2>Catalog</h2>
                    <Link className={s.catalog_link_btn} to='/categories'>All categories </Link>
                </div>
                <div className={s.categories}>{categories.list.filter((_,i) => i <= 3).map(item => <CategoryItem key={item.id} {...item}/>)}</div>
            </div>
            <DiscountForm/>
            <div className={s.sale_blok}>
                <h2 className={s.sale_blok_title}>Sale</h2>
                <div className={s.products_on_sale}>
                    {products.data.filter((el) => el.discont_price != null)
                    .filter((_,i)=> i < 4).map(el => <ProductItem key={el.id} {...el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;