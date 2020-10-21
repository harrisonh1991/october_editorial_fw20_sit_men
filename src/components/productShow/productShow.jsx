import React from 'react';
import styles from './styles/productShow.module.scss';
import Content2 from '../Content/content2';
import ProductSwiper from '../swiper/productSwiper.jsx';

const ProductShow = props => {

    const { title, content, banner1, banner2, products, banner2Index} = props;

    var banner2classNames = (typeof banner2Index === 'undefined')? '': styles.bannerDB;
    

    return (
        <div className={styles.container}>
            <div className={styles.banner1}>
                {banner1}
            </div>
            <Content2 title={title} content={content} />
            <div className={[styles.banner2, banner2classNames].join(' ')}>
                {banner2}
            </div>
            <ProductSwiper products={products}/>
        </div>
    );

}

export default ProductShow;