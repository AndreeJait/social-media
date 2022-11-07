// @flow
import * as React from 'react';
import styles from './index.module.css';
import {Outlet} from "react-router-dom";
type Props = {

};

export function Root(props: Props) {
    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
            {/*  Code navbar here  */}
                <nav>
                    <ul>
                        <li>Test 1</li>
                        <li>Test 2</li>
                        <li>Test 3</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
};