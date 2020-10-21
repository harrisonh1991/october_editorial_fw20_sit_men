import React from 'react';

import styles from './styles/cta.module.scss'

export const CtaBit = props => {
    const { content, link } = props;
    return (
        <a className={[styles.cta, styles.cta_bit].join(' ')} href={link}>
            <i className={['iconfont icon-icon_arrowright', styles.icon, styles.icon_bit ].join(' ')}></i>{content}
        </a>
    );
}

export const CtaSit = props => {
    const { content, link } = props;
    return (
        <a className={[styles.cta, styles.cta_sit].join(' ')} href={link}>
            {content}<i className={['iconfont icon-icon_forward_normal', styles.icon, styles.icon_sit ].join(' ')}></i>
        </a>
    );
}