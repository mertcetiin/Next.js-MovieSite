import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function index() {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://twitter.com/merttcettin" target="_blank">
                Mert Çetin
            </Link>
        </footer>
    )
}

export default index;