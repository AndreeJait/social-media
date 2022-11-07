// @flow
import * as React from 'react';
import styles from './index.module.css';
import {Outlet} from "react-router-dom";
import NavbarTop from "../../../components/organisms/NavbarTop";
type Props = {

};

export function Root(props: Props) {
    return (
        <div className={"root"}>
            <NavbarTop />
            <div className={styles.wrapperContent}>
                <div className={styles.navbar}>

                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};