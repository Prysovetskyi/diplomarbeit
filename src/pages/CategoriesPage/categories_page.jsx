import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/category_item';

const CategoriesPage = () => {
  const { list } = useSelector(state => state.categories);
  const [categoryId] = useState(null);
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3333/categories/${categoryId}`)
      .then(response => response.json())
      .then(data => {setCategory(data.category);setProducts(data.data);setLoading(false);}).catch(error => {
        console.error('Error_data:', error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className={s.categories_page}>
      <h1 className={s.title}>Categories</h1>
      <div className={s.categories}>{list.map(el => (<CategoryItem key={el.id} {...el} />))}</div>
    </div>
  );
};

export default CategoriesPage;
