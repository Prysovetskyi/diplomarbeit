import React, { useEffect } from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/header';
import MainPage from '../../pages/MainPage/main_page';
import NotFoundPage from '../../pages/NotFoundPage/not_found_page';
import { useDispatch } from 'react-redux'
import ProductsPage from '../../pages/ProductsPage/product_page';
import CategoriesPage from '../../pages/CategoriesPage/categories_page';
import BasketPage from '../../pages/BasketPage/basket_page';
import SingleProductPage from '../../pages/SingleProductPage/single_product_page';
import { fetchCategories } from '../../store/slices/cateroriesSlice';
import { fetchProducts } from '../../store/slices/productsSlice';
import Footer from '../Footer/footer';

function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <div>

      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/categories/:categoryTitle/:categoryID' element={<ProductsPage/>}/>
        <Route path='/sales/:sales' element={<ProductsPage/>}/>
        <Route path='/products/all' element={<ProductsPage/>}/>
        <Route path='/product/:id' element={<SingleProductPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
