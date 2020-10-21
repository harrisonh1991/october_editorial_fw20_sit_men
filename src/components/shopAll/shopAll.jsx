import React from 'react';
import styles from './styles/shopAll.module.scss';
import {CtaSit} from '../Cta/cta.jsx';

export const ShopAll = props => {

    const { link, content } = props.cta;

    return (
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <CtaSit 
                    link={link}
                    content= {content}
                />
            </div>
        </div>
    );

}